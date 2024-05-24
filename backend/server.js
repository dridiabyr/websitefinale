const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./models/user.models");
const restaurantRoutes = require("./models/restaurant.models");
const orderRouter = require("./models/order.models");
require("./config/mongoose.config");
const reservationRouter = require("./models/reservation.models");
const Menurouter = require("./models/menu.models");

const app = express();
const port = process.env.PORT;

app.use("/api/users", userRoutes);

require("./routes/menu.routes")(app);

require("./routes/order.routes")(app);

require("./routes/reservation.routes")(app);
require("./routes/restaurant.routes")(app);
require("./routes/table.routes")(app);

app.use("/api/orders", orderRouter);
app.use("api/menus", Menurouter);
app.use("/api/restaurants", restaurantRoutes);

app.use("/api/reservation", reservationRouter);

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "example@email.com" && password === "password") {
    res.json({ success: true, token: "your_token_here" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.use(express.json(), express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`port listening on : ${port}`);
});
