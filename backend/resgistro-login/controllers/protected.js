async function onlyUsers(req, res, next) {
	res.send({ message: "If you are viewing this you are a logged user" });
}

async function onlyAdmin(req, res, next) {
	res.send({ message: "If you are viewing this your are an admin user" });
}

module.exports = {
	onlyUsers,
	onlyAdmin,
};
