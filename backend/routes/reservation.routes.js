const express = require("express");

const reseravtioncontroller = require("../controllers/reservation.controllers");

const router = express.Router();

router.get("/allreservations", reseravtioncontroller.getAllReservations);
router.get("/getbyId", reseravtioncontroller.getreservationById);
router.post("/createreservation", reseravtioncontroller.createReservation);
router.patch("/updatereservation", reseravtioncontroller.updateReservation);
router.delete("/deletereservatin", reseravtioncontroller.deleteReservation);

module.exports = router;
