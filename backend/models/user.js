const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true },
	mobilenumber: { type: String, required: true },
	password: { type: String, required: true },
	address: { type: String, required: true },
	city: { type: String, required: true },
	country: { type: String, required: true },
	pincode: { type: String, required: true },
	verified: { type: Boolean, default: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().required().label("Full Name"),
		email: Joi.string().email().required().label("Email"),
		mobilenumber: Joi.string().required().label("Mobile Number"),
		password: passwordComplexity().required().label("Password"),
		address: Joi.string().required().label("Address"),
		city: Joi.string().required().label("City"),
		country: Joi.string().required().label("Country"),
		pincode: Joi.string().required().label("Pin Code"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
