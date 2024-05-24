const reservation = require("../models/reservation.models");
module.exports.createReservation = (req, res) => {
  reservation
    .create(req.body)
    .then((reservations) => res.json(reservations))
    .catch((err) => res.json(err));
};

module.exports.getAllReservations = (req, res) => {
  reservation
    .find()
    .then((reservations) => res.json(reservations))
    .catch((err) => res.json(err));
};

module.exports.getreservationById = (req, res) => {
  reservation
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getproductById) => res.json(getproductById))
    .catch((err) => res.json(err));
};

module.exports.updateReservation = (req, res) => {
  reservation
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updatereservation) => res.json(updatereservation))
    .catch((err) => res.json(err));
};

module.exports.deleteReservation = (req, res) => {
  reservation
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deletereservatin) => res.json(deletereservatin))
    .catch((err) => res.json(err));
};


