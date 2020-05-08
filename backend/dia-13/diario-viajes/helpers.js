require('dotenv').config();

const { format } = require('date-fns');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');
const uuid = require('uuid');
const { getDB } = require('./db');

const imageUploadPath = path.join(__dirname, process.env.UPLOADS_DIR);

// Format a date to DB
function formatDateToDB(date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

// Save a photo and get filename
async function processAndSavePhoto(uploadedImage) {
  // Random File name to be saved
  const savedFileName = `${uuid.v1()}.jpg`;

  // Ensure the uploads path exists
  await fs.ensureDir(imageUploadPath);

  // Process image
  const finalImage = sharp(uploadedImage.data);

  // Check image size
  const imageInfo = await finalImage.metadata();

  // If image is wider than 500px resize it
  if (imageInfo.width > 500) {
    finalImage.resize(500);
  }

  // Save image
  await finalImage.toFile(path.join(imageUploadPath, savedFileName));

  return savedFileName;
}

// Delete a photo
async function deletePhoto(imagePath) {
  await fs.unlink(path.join(imageUploadPath, imagePath));
}

// Calculate vote average
async function calculateVoteAverage(id) {
  const db = await getDB();

  // Get entry votes
  const votes = await db.all(
    'SELECT vote from diary_votes WHERE entry_id=:entry_id',
    {
      ':entry_id': id
    }
  );

  // Sum all votes
  const voteTotal = votes.reduce((acc, current) => {
    return acc + current.vote;
  }, 0);

  // Calculate average
  return voteTotal / votes.length;
}

module.exports = {
  formatDateToDB,
  processAndSavePhoto,
  deletePhoto,
  calculateVoteAverage
};
