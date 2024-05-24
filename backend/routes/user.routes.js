const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {
  authmiddleware,
  authenticateUser,
  authenticateAdmin,
  authenticateRestaurator,
} = require('../middleware/auth');

router.use(authmiddleware);
router.post('/createuser', async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new user
    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});


// Define your routes with specific role checks
router.post('/admin-route', authenticateAdmin, userController.someFunction);
router.post('/user-route', authenticateUser, userController.someFunction);
router.post('/restaurator-route', authenticateRestaurator, userController.someFunction);

module.exports = router;
