const router = require("express").Router();
const { User, validate } = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");

const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
		

		res
			.status(201)
			.send({ message: "Sucessfully Sign Up !! Please Sign In." });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});



module.exports = router;
