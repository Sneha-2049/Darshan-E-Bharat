const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");

/* ===========================
   REGISTER USER
=========================== */
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user) {
            // ⭐ AGAR USER EXIST KARTA HAI AUR REJECTED HAI:
            if (user.isRejected) {
                // Purane data ko naye data se update kar do
                const salt = await bcrypt.genSalt(Number(process.env.SALT));
                const hashPassword = await bcrypt.hash(req.body.password, salt);

                await User.findByIdAndUpdate(user._id, {
                    ...req.body,
                    password: hashPassword,
                    isRejected: false, // Status wapas pending kar do
                    isVerified: false  // Ensure verified false rahe
                });

                return res.status(201).send({ message: "Request re-submitted successfully!" });
            }

            // Agar user rejected nahi hai toh normal error
            return res.status(409).send({ message: "User with given email already exists!" });
        }

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		console.error("REGISTER ERROR:", error.message);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

/* ===========================
   GET USER PROFILE
=========================== */
router.get("/me", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user._id)
			.populate({
				path: "purchasedCourses.course",
				model: "Course",
			})
			.select("-password");

		if (!user)
			return res.status(404).json({ message: "User not found" });

		res.json(user);
	} catch (err) {
		console.error("🔥 ERROR IN /me ROUTE:", err.message);
		res.status(500).json({ message: err.message });
	}
});

/* ===========================
   UPDATE PROFILE (✅ FIXED)
=========================== */
router.put("/update", auth, async (req, res) => {
	try {
		const {
			firstName,
			lastName,
			expertise,
			experience,
			phone,
			bio
		} = req.body;

		const updatedUser = await User.findByIdAndUpdate(
			req.user._id,
			{
				$set: {
					firstName,
					lastName,
					expertise,
					experience,
					phone,     // ✅ ADDED
					bio        // ✅ ADDED
				},
			},
			{ new: true }
		).select("-password");

		if (!updatedUser) {
			return res.status(404).send({ message: "User not found" });
		}

		res.status(200).send({
			message: "Profile updated successfully",
			data: updatedUser,
		});
	} catch (error) {
		console.error("UPDATE ERROR:", error.message);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// 1. Get Pending Vendors
router.get("/admin/pending-vendors", async (req, res) => {
  try {
        const vendors = await User.find({ 
            role: { $in: ["vendor"] }, 
            isVerified: false, 
            isRejected: false // ⭐ Ye line zaroori hai!
        });
        res.status(200).send({ vendors });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// 2. Approve Vendor
router.put("/admin/verify-vendor/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { isVerified: true });
    res.status(200).send({ message: "Vendor approved!" });
  } catch (error) {
    res.status(500).send({ message: "Error approving vendor" });
  }
});

// 3.  Reject & Delete Vendor
router.put("/admin/reject-vendor/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id, 
            { isRejected: true, isVerified: false }, 
            { new: true }
        );
        if (!user) return res.status(404).send({ message: "User not found" });
        res.status(200).send({ message: "Vendor rejected successfully" });
    } catch (error) {
        res.status(500).send({ message: "Server Error" });
    }
});

module.exports = router;
