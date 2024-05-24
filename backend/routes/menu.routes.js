const express = require("express");
const Menucontroller = require("../controllers/menu.controllers");
const Menurouter = express.Router();

Menurouter.get("/api/allreservations", Menucontroller.getAllMenu);
Menurouter.get("/api/getbyId", Menucontroller.getMenuById);
Menurouter.post("/api/createreservation", Menucontroller.createMenu);
Menurouter.patch("/api/updatereservation", Menucontroller.updateMenu);
Menurouter.delete("/api/deletereservatin", Menucontroller.deleteMenu);

module.exports = Menurouter;
