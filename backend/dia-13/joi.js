const Joi = require("@hapi/joi");

const schema = Joi.object().keys({
	email: Joi.string().email().required(),
	name: Joi.string(),
	url: Joi.string().uri().error(new Error("pon una url por favor")),
	date: Joi.date().max(new Date()).min(new Date(1900, 01, 01)),
});

const body = {
	email: "marco@gmail.com",
	name: "Marco",
	url: "https://marcopg.com",
	date: new Date(2003, 12, 12),
};

try {
	Joi.assert(body, schema);
	console.log("demás server stuff");
} catch (error) {
	console.error("Nope");
}
