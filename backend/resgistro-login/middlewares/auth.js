require("dotenv").config();
const jwt = require("jsonwebtoken");

async function userAuthenticated(req, res, next) {
	try {
		const { authorization } = req.headers;

		console.log(authorization);
		const decoded = jwt.verify(authorization, process.env.SECRET);

		req.auth = decoded;

		next();
	} catch (error) {
		const authError = new Error("You are not allow to do this, please log-in");
		authError.httpCode = 401;

		next(authError);
	}
}
async function userIsAdmin(req, res, next) {
	if (!req.auth || req.auth.role !== "admin") {
		const error = new Error(
			"You do not have admin privileges to acces this resource"
		);
		error.httpCode = 401;
		return next(error);
	}

	next();
}

module.exports = {
	userAuthenticated,
	userIsAdmin,
};
