const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// GET user details (including coins and quizResults)
router.get("/me", auth, async (req, res) => {
	try {
	  const user = await User.findById(req.user._id).select("-password"); // exclude password
	  if (!user) return res.status(404).json({ message: "User not found" });
	  res.json(user); // send full user object (with coins & quizResults)
	} catch (err) {
	  console.error("Error fetching user:", err);
	  res.status(500).json({ message: "Server error" });
	}
  });

module.exports = router;
