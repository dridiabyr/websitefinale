const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

async function authenticateUser(req, res, next) {
  if (req.userType !== "user") {
    return res.status(403).send({ message: "Access forbidden: User only" });
  }
  next();
}

async function authenticateAdmin(req, res, next) {
  if (req.userType !== "admin") {
    return res.status(403).send({ message: "Access forbidden: Admin only" });
  }
  next();
}

async function authenticateRestaurator(req, res, next) {
  if (req.userType !== "restaurator") {
    return res.status(403).send({ message: "Access forbidden: Restaurator only" });
  }
  next();
}

async function authmiddleware(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).send({ message: "Access denied" });
  }

  const accessToken = authorizationHeader.split(" ")[1];

  if (!accessToken) {
    return res.status(401).send({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: "Token has been tampered!" });
    }

    const email = decoded.email;
    const foundUser = await User.findOne({ email: email });

    if (!foundUser) {
      return res.status(401).send({ message: "User doesn't exist!" });
    }

    req.userType = foundUser.role;
    req.user = foundUser;
    next();
  } catch (err) {
    res.status(401).send({ message: "Token has been tampered!" });
  }
}

module.exports = {
  authmiddleware,
  authenticateUser,
  authenticateAdmin,
  authenticateRestaurator,
};
