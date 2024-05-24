const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controllers');
const {
  authmiddleware,
  authenticateUser,
  authenticateAdmin,
  authenticateRestaurator,
} = require('../middelware/auth.middelware');


router.use(authmiddleware);

// Define your routes with specific role checks
router.post('/admin-route', authenticateAdmin, restaurantController.someFunction);
router.post('/user-route', authenticateUser, restaurantController.someFunction);
router.post('/restaurator-route', authenticateRestaurator, restaurantController.someFunction);

module.exports = router;
