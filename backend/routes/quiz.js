const router = require("express").Router();
const { User } = require("../models/user");
const auth = require("../middleware/auth"); // Create this middleware to verify JWT

router.post("/submit", auth, async (req, res) => {
  const { topic, score } = req.body;
  const userId = req.user._id;

  const coinsEarned = Math.floor(score * 0.5);

  try {
    const user = await User.findById(userId);

    // Check if user has already taken this quiz
    const existingQuiz = user.quizResults.find(q => q.topic === topic);

    if (existingQuiz) {
      // If new score is higher, update it
      if (score > existingQuiz.score) {
        user.coins += coinsEarned - existingQuiz.coins;
        existingQuiz.score = score;
        existingQuiz.coins = coinsEarned;
        existingQuiz.date = new Date();
      }
    } else {
      user.quizResults.push({ topic, score, coins: coinsEarned });
      user.coins += coinsEarned;
    }

    await user.save();
    res.send({ message: "Score updated successfully", coins: user.coins });
  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
// This route handles the submission of quiz results. It checks if the user has already taken the quiz and updates their score and coins accordingly. If the user has not taken the quiz, it adds a new entry to their quiz results.
// The route also updates the user's total coins based on their performance in the quiz. The coins are calculated as half of the score, rounded down to the nearest integer. If the user has already taken the quiz and their new score is higher, it updates the score and coins accordingly.
// Finally, it sends a response back to the client with a success message and the updated coin balance.
