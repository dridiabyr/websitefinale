const tablecontroller = require("../controllers/table.reseravtion");

module.exports = function (app) {
  app.get("/api/alltables", tablecontroller.getAllTable);
  app.get("/api/gettablebyId", tablecontroller.getTableById);
  app.post("/api/createtable", tablecontroller.createTable);
  app.patch("/api/updatetable", tablecontroller.updateTable);
  app.delete("/api/deletetable", tablecontroller.deleteTable);
};
