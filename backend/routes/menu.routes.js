const express = require("express");
const Menucontroller = require("../controllers/menu.controllers");
const Menurouter = express.Router();

Menurouter.get("/allreservations", Menucontroller.getAllMenu);
Menurouter.get("/getmenubyId", Menucontroller.getMenuById)
Menurouter.post("/createmenu",Menucontroller.createMenu)

Menurouter.patch("/updatemenu", Menucontroller.updateMenu);
Menurouter.delete("/deletemenu", Menucontroller.deleteMenu);

module.exports = Menurouter;
