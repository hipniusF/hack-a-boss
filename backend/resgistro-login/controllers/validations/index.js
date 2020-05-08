const Joi = require("@hapi/joi");

const userSchema = Joi.object().keys({
	email: Joi.string()
		.email()
		.required()
		.error(new Error("The email must be a valid email")),
	password: Joi.string()
		.min(6)
		.max(100)
		.required()
		.error(new Error("The password must be at least 6 characters long")),
});

module.exports = {
	userSchema,
};
