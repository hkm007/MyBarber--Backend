const Shop = require('../models/Shop');
const Appointment = require('../models/Appointment');

exports.createShop = (req, res) => {
    console.log("new shop api hit");
}

exports.getAppointment = (req, res) => {
    console.log(req.params.shopID);
}

exports.acknowledgeAppointment = (req, res) => {
    console.log(req.params.appointmentID);
}