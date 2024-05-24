const express = require("express");
const router = express.Router();
const restauratorController = require("../controllers/restaurator.controllers");
const { authenticateRestaurator } = require("../middelware/auth.middelware");

router.post("/login", restauratorController.login);

router.get("/dashboard", authenticateRestaurator, restauratorController.dashboard);

module.exports = router;
