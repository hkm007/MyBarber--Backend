const Appointment = require('../models/Appointment');

exports.getCustomerAppointment = (req, res) => {
    console.log(req.params.customerID);
}

exports.getShopAppointment = (req, res) => {
    console.log(req.params.shopID);
}

exports.createAppointment = (req, res) => {
    console.log(req.params.customerID);
}

exports.acknowledgeAppointment = (req, res) => {
    console.log(req.params.shopID);
}

exports.cancelAppointment = (req, res) => {
    console.log(req.params.appointmentID);
}