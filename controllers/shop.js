const Shop = require('../models/Shop');
const Appointment = require('../models/Appointment');

exports.createShop = async (req, res) => {
    const { name, owner, phone, address } = req.body;

    if(!name || !owner || !phone || !address) {
        return res.json({msg: "Invalid credentials!"});
    }

    try {
        const shop = await Shop.findOne({phone});

        if(!shop) {
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
        } else {
            res.json({
                msg: "Shop already exists!",
                data: shop
            })
        }
    } catch(err) {
        console.log(err);
        res.json({msg: "Something went wrong!"});
    }
}

exports.getAllAppointment = async (req, res) => {
    let shopID = req.params.shopID;

    try {
        const shop = await Shop.findOne({_id: shopID});
    
        if(!shop) {
            return res.json({ msg: "Unauthorized access" });
        }

        const appointments = await Appointment.find({
            shop: shopID
        })
        .populate('shop', ['name', 'owner', 'phone', 'address'])
        .populate('customer', ['name', 'phone'])
        .exec((err, data) => {
            if(!err) {
                res.json({
                    msg: "Appointments found",
                    data
                });
            } else {
                console.log(err);
                res.json({ msg: 'Something went wrong' });
            }
        });
    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.getNewAppointment = async (req, res) => {
    let shopID = req.params.shopID;

    try {
        const shop = await Shop.findOne({_id: shopID});
    
        if(!shop) {
            return res.json({ msg: "Unauthorized access" });
        }

        const appointments = await Appointment.find({
            shop: shopID,
            $and: [ { "accepted": false }, { "declined": false } ]
        })
        .populate('shop', ['name', 'owner', 'phone', 'address'])
        .populate('customer', ['name', 'phone'])
        .exec((err, data) => {
            if(!err) {
                res.json({
                    msg: "Appointments found",
                    data
                });
            } else {
                console.log(err);
                res.json({ msg: 'Something went wrong' });
            }
        });
    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.acceptAppointment = async (req, res) => {
    let appointmentID = req.params.appointmentID;
    let shopID = req.params.shopID;

    try {
        const shop = await Shop.findOne({_id: shopID});
    
        if(!shop) {
            return res.json({ msg: "Unauthorized access" });
        }

        const appointment = await Appointment.findById(appointmentID);
        appointment.accepted = true;

        await appointment.save();
        return res.json({ msg: "Appointment accepted!"});
    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.declineAppointment = async (req, res) => {
    let appointmentID = req.params.appointmentID;
    let shopID = req.params.shopID;

    try {
        const shop = await Shop.findOne({_id: shopID});
    
        if(!shop) {
            return res.json({ msg: "Unauthorized access" });
        }

        const appointment = await Appointment.findById(appointmentID);
        appointment.declined = true;

        await appointment.save();
        return res.json({ msg: "Appointment declined!"});
    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}