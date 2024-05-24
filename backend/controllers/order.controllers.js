const Order = require("../models/order.models");
module.exports.createOrder = (req, res) => {
  Order
    .create(req.body)
    .then((Order) => res.json(Order))
    .catch((err) => res.json(err));
};

module.exports.getAllOrder = (req, res) => {
  Order
    .find()
    .then((Order) => res.json(Order))
    .catch((err) => res.json(err));
};

module.exports.getrOrderById = (req, res) => {
  Order
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getOrderById) => res.json(getOrderById))
    .catch((err) => res.json(err));
};

module.exports.updateOrder = (req, res) => {
  Order
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateOrder) => res.json(updateOrder))
    .catch((err) => res.json(err));
};

module.exports.deleteOrder = (req, res) => {
  Restaurant
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteOrder) => res.json(deleteOrder))
    .catch((err) => res.json(err));
};

Order