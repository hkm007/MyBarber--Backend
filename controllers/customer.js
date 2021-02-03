const Appointment = require('../models/Appointment');
const Customer = require('../models/Customer');
const Shop = require('../models/Shop');

exports.createCustomer = (req, res) => {
    console.log("new customer api hit");
}

exports.createAppointment = (req, res) => {
    console.log(req.params.customerID);
}

exports.getAppointment = (req, res) => {
    console.log(req.params.customerID);
}

exports.cancelAppointment = (req, res) => {
    console.log(req.params.appointmentID);
}

exports.getAllShop = (req, res) => {
    console.log("all shop api hit");
}

exports.getShop = (req, res) => {
    console.log(req.params.shopID);
}