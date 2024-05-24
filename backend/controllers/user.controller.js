

const User = require("../models/user.models");

module.exports.createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => res.json(deletedUser))
    .catch((err) => res.status(400).json(err));
};
