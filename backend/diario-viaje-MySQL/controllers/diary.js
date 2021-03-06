const { getConnection } = require('../db');

const {
  formatDateToDB,
  processAndSavePhoto,
  deletePhoto
} = require('../helpers');

const { entrySchema, voteSchema, searchSchema } = require('./validations');

// GET - /entries
async function listEntries(req, res, next) {
  try {
    const connection = await getConnection();
    const search = req.query;

    await searchSchema.validateAsync(search.search);

    let entries = [];

    if (search.search) {
      [entries] = await connection.query(
        `SELECT diary.*, 
        (SELECT AVG(vote) FROM diary_votes WHERE entry_id=diary.id) AS voteAverage
        FROM diary
        WHERE diary.place LIKE ? or diary.description LIKE ?
        ORDER BY diary.date DESC`,
        [`%${search.search}%`, `%${search.search}%`]
      );
    } else {
      [entries] = await connection.query(
        `SELECT diary.*, 
        (SELECT AVG(vote) FROM diary_votes WHERE entry_id=diary.id) AS voteAverage
        FROM diary
        ORDER BY diary.date DESC`
      );
    }

    connection.release();

    res.send({
      status: 'ok',
      data: entries
    });
  } catch (error) {
    next(error);
  }
}

// POST - /entries
async function newEntry(req, res, next) {
  //Meterlos en la base de datos
  try {
    await entrySchema.validateAsync(req.body);

    const { place, description } = req.body;

    let savedFileName;

    if (req.files && req.files.photo) {
      try {
        savedFileName = await processAndSavePhoto(req.files.photo);
      } catch (error) {
        const imageError = new Error(
          'Can not process upload image. Try again.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    }

    const connection = await getConnection();

    const date = formatDateToDB(new Date());

    const [
      result
    ] = await connection.query(
      'INSERT INTO diary(date, place, description, image) VALUES(?, ?, ?, ?)',
      [date, place, description, savedFileName]
    );

    connection.release();

    res.send({
      status: 'ok',
      data: {
        id: result.insertId,
        date,
        place,
        description,
        image: savedFileName
      }
    });
  } catch (error) {
    next(error);
  }
}

// PUT - /entries/:id
async function editEntry(req, res, next) {
  try {
    const { place, description } = req.body;
    const { id } = req.params;

    await entrySchema.validateAsync(req.body);

    const connection = await getConnection();

    const [
      current
    ] = await connection.query('SELECT image FROM diary WHERE id=?', [id]);

    if (!current.length) {
      const error = new Error(`The entry with id ${id} does not exist`);
      error.httpCode = 404;
      throw error;
    }

    let savedFileName;

    if (req.files && req.files.photo) {
      try {
        savedFileName = await processAndSavePhoto(req.files.photo);

        if (current && current.image) {
          await deletePhoto(current.image);
        }
      } catch (error) {
        const imageError = new Error(
          'Can not process upload image. Try again.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    } else {
      savedFileName = current.image;
    }

    await connection.query(
      'UPDATE diary SET place=?, description=?, image=? WHERE id=?',
      [place, description, savedFileName, id]
    );

    connection.release();

    res.send({
      status: 'ok',
      data: {
        id,
        place,
        description,
        image: savedFileName
      }
    });
  } catch (error) {
    next(error);
  }
}

// GET - /entries/:id
async function getEntry(req, res, next) {
  try {
    const { id } = req.params;

    const connection = await getConnection();

    const [result] = await connection.query(
      `SELECT entries.*, AVG(votes.vote) AS voteAverage
      FROM diary AS entries, diary_votes AS votes
      WHERE entries.id=?
      AND votes.entry_id=?`,
      [id, id]
    );

    if (!result[0].id) {
      const error = new Error(`The entry with id ${id} does not exist`);
      error.httpCode = 404;
      throw error;
    }

    connection.release();

    res.send({
      status: 'ok',
      data: result[0]
    });
  } catch (error) {
    next(error);
  }
}

// DELETE - /entries/:id
async function deleteEntry(req, res, next) {
  try {
    const { id } = req.params;

    const connection = await getConnection();

    // Delete image if exists!
    const [
      current
    ] = await connection.query('SELECT image from diary where id=?', [id]);

    if (!current.length) {
      const error = new Error(`There is no entry with id ${id}`);
      error.httpCode = 400;
      throw error;
    }

    if (current.image) {
      await deletePhoto(current.image);
    }

    await connection.query('DELETE from diary WHERE id=?', [id]);
    await connection.query('DELETE FROM diary_votes WHERE entry_id=?', [id]);

    connection.release();

    res.send({
      status: 'ok',
      message: `The entry with id ${id} has been deleted`
    });
  } catch (error) {
    next(error);
  }
}

// POST - /entries/:id/votes
async function voteEntry(req, res, next) {
  try {
    const { id } = req.params;

    // Validate payload
    await voteSchema.validateAsync(req.body);

    const { vote } = req.body;

    const connection = await getConnection();

    // Check if the entry actually exists
    const [entry] = await connection.query('SELECT id from diary where id=?', [
      id
    ]);

    if (!entry.length) {
      const error = new Error('La entrada con la id específicada no existe');
      error.httpCode = 404;
      throw error;
    }

    // Check if the user with the current ip already voted for this entry
    const [
      existingVote
    ] = await connection.query(
      'SELECT id from diary_votes where entry_id=? AND ip=?',
      [id, req.ip]
    );

    if (existingVote.length) {
      const error = new Error('Ya se votó a esta entrada con tu ip');
      error.httpCode = 403;
      throw error;
    }

    //Vote
    await connection.query(
      `
      INSERT INTO diary_votes(entry_id, vote, date, ip) 
      VALUES(?, ?, ?, ?)`,
      [id, vote, formatDateToDB(new Date()), req.ip]
    );

    connection.release();

    res.send({
      status: 'ok',
      message: `The vote (${vote} points) to the entry with id ${id} was successful`
    });
  } catch (error) {
    next(error);
  }
}

async function getEntryVotes(req, res, next) {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    const [
      votes
    ] = await connection.query('SELECT * from diary_votes WHERE entry_id=?', [
      id
    ]);

    connection.release();

    res.send({
      status: 'ok',
      data: votes
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listEntries,
  newEntry,
  getEntry,
  deleteEntry,
  editEntry,
  voteEntry,
  getEntryVotes
};
