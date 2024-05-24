const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { authenticateAdmin } = require("../middleware/auth.middleware");

router.post("/login", adminController.login);
router.get("/dashboard", authenticateAdmin, adminController.dashboard);

router.get("/alladmin", adminController.getAllAdmin);
router.get("/getadminbyId", adminController.getAdminById);
router.post("/createadmin", adminController.createAdmin);
router.patch("/updateadmin", adminController.updateAdmin);
router.delete("/deleteadmin", adminController.deleteAdmin);

module.exports = router;
