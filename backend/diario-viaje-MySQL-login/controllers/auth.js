const jwt = require("jsonwebtoken");

async function userAuthenticated(req, res, next) {
	try {
		const { authorization } = req.headers;
		const decoded = jwt.verify(authorization, process.env.SECRET);

		req.auth = decoded;

		next();
	} catch (error) {
		const authError = new Error("Please login before accesing this resource");
		authError.httpCode = 401;
		next(authError);
	}
}

async function userIsAdmin(req, res, next) {
	if (req.auth.role !== "admin") {
		const error = new Error("You must be and admin to access this resource");
		error.httpCode = 401;
		next(error);
	}

	next();
}

module.exports = {
	userAuthenticated,
	userIsAdmin,
};
