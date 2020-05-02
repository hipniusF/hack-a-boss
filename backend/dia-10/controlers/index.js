const dataControler = (req, res) => {
	console.log(req.query);
	res.send({ data: "ok" });
};

const dataPostControler = (req, res) => {
	res.send({ post: "ok" });
};

const userPhotoControler = (req, res) => {
	res.send({ userPhotos: "ok" });
};

module.exports = {
	dataControler,
	dataPostControler,
	userPhotoControler,
};
