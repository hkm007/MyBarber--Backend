const Shop = require('../models/Shop');
const Appointment = require('../models/Appointment');

exports.createShop = (req, res) => {
    const { name, owner, phone, address } = req.body;

    if(!name || !owner || !phone || !address) {
        return res.json({msg: "Invalid credentials!"});
    }

    let newShop = new Shop({name, owner, phone, address});
    newShop.save()
    .then(data => {
        res.json({
            msg: "Shop created!",
            data
        })
        console.log(data)
    }).catch(err => {
        console.log(err);
        res.json({msg: "Something went wrong!"});
    })
}

exports.getAppointment = (req, res) => {
    console.log(req.params.shopID);
}

exports.acknowledgeAppointment = (req, res) => {
    console.log(req.params.appointmentID);
}