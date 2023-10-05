// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../model/userModel'); // Your user model

router.get('/getUsername', async (req, res) => {
  try {
    // Assume you have a user ID to retrieve the username, replace with actual logic
    const userId = req.query.userId; // You can send userId as a query parameter
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
