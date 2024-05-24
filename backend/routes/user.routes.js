const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {
  authmiddleware,
  authenticateUser,
  authenticateAdmin,
  authenticateRestaurator,
} = require('../middleware/auth');

// Apply authmiddleware globally to all routes in this router
router.use(authmiddleware);

// Define your routes with specific role checks
router.post('/admin-route', authenticateAdmin, userController.someFunction);
router.post('/user-route', authenticateUser, userController.someFunction);
router.post('/restaurator-route', authenticateRestaurator, userController.someFunction);

module.exports = router;
