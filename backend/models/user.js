const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

/* ===========================
   QUIZ SCHEMA
=========================== */
const quizSchema = new mongoose.Schema({
	topic: { type: String, required: true },
	score: { type: Number, required: true },
	coins: { type: Number, required: true },
	date: { type: Date, default: Date.now },
});

/* ===========================
   PURCHASED COURSE SCHEMA
=========================== */
const purchasedCourseSchema = new mongoose.Schema({
	course: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "course",
		required: true
	},

	enrolledAt: {
		type: Date,
		default: Date.now
	},

	expiryDate: {
		type: Date,
		required: true
	},

	amountPaid: {
		type: Number,
		required: true
	},

paymentMethod: {
  type: String,
  enum: ["card", "upi", "netbanking", "coins", "free"],
  required: true
},
	isActive: {
		type: Boolean,
		default: true
	}

}, { _id: false });

/* ===========================
   USER SCHEMA
=========================== */
const userSchema = new mongoose.Schema({

	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },

	role: {
		type: String,
		enum: ["user", "teacher", "merchant", "admin"],
		default: "user"
	},

	/* Teacher Fields */
	expertise: { type: String, default: "" },
	experience: { type: String, default: "" },

	/* Wallet System */
	coins: { type: Number, default: 0 },

	/* Quiz */
	quizResults: [quizSchema],

	/* LMS System */
	purchasedCourses: [purchasedCourseSchema]

}, { timestamps: true });

/* ===========================
   TOKEN GENERATOR
=========================== */
userSchema.methods.generateAuthToken = function () {
	return jwt.sign(
		{ _id: this._id, role: this.role },
		process.env.JWTPRIVATEKEY,
		{ expiresIn: "7d" }
	);
};

/* ===========================
   VALIDATION
=========================== */
const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		role: Joi.string()
			.valid("user", "teacher", "merchant", "admin")
			.optional(),
		expertise: Joi.string().allow(""),
		experience: Joi.string().allow("")
	});
	return schema.validate(data);
};

const User = mongoose.model("user", userSchema);

module.exports = { User, validate };