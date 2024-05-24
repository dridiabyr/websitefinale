const express = require("express");

const ordercontroller = require("../controllers/order.controllers");
const router = express.Router();
router.get("/allorder", ordercontroller.getAllOrder);
router.get("/getbyId/:id", ordercontroller.getrOrderById);
router.post("/createorder", ordercontroller.createOrder);
router.patch("/updateorder/:id", ordercontroller.updateOrder);
router.delete("/deleteorder/:id", ordercontroller.deleteOrder);

module.exports = router;
