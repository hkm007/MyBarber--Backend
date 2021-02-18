const Appointment = require('../models/Appointment');
const Customer = require('../models/Customer');
const Shop = require('../models/Shop');

exports.createCustomer = async (req, res) => {
    const { name, phone } = req.body;

    if(!name || !phone) {
        return res.json({msg: "Invalid credentials!"});
    }

    try {
        const profile = await Customer.findOne({phone});

        if(!profile) {
            let newCustomer = new Customer({name, phone});
            newCustomer.save()
            .then(data => {
                res.json({
                    msg: "Account created",
                    data
                })
                console.log(data)
            }).catch(err => {
                console.log(err);
                res.json({msg: "Something went wrong!"});
            })
        } else {
            res.json({
                msg: "Account already exists!",
                data: profile
            })
        }
    } catch(err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.createAppointment = async (req, res) => {
    const { date, time, description } = req.body;
    let customerID = req.params.customerID;
    let shopID = req.params.shopID;

    try {
        const customer = await Customer.findOne({_id: customerID});
    
        if(!customer) {
            return res.json({ msg: "Unauthorized access" });
        }

        let newAppointment = new Appointment({
            customer: customerID, 
            shop: shopID, 
            date,
            time,
            description
        });

        newAppointment.save()
        .then(data => {
            res.json({
                msg: "Appointment Initiated",
                data
            })
        }).catch(err => {
            console.log(err);
            res.json({msg: "Something went wrong!"});
        })

    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.getAppointment = async (req, res) => {
    let customerID = req.params.customerID;

    try {
        const customer = await Customer.findOne({_id: customerID});
    
        if(!customer) {
            return res.json({ msg: "Unauthorized access" });
        }

        const appointments = await Appointment.find({
            customer: customerID
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

exports.cancelAppointment = async (req, res) => {
    let appointmentID = req.params.appointmentID;
    let customerID = req.params.customerID;

    try {
        const customer = await Customer.findOne({_id: customerID});
    
        if(!customer) {
            return res.json({ msg: "Unauthorized access" });
        }

        const appointment = await Appointment.findById(appointmentID);

        if(!appointment) {
            return res.json({ msg: 'Appointment not found' });
        } else {
            await appointment.remove();
            res.json({ msg: 'Appointment cancelled!' });
        }
    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.getAllShop = async (req, res) => {
    let customerID = req.params.customerID;

    try {
        const customer = await Customer.findOne({_id: customerID});
    
        if(!customer) {
            return res.json({ msg: "Unauthorized access" });
        }

        const shops = await Shop.find();
        res.json({
            mas: "Shops found",
            data: shops
        });
    } catch (err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}

exports.getShop = async (req, res) => {
    let customerID = req.params.customerID;
    let { name } = req.body;

    // validating
    try {
        const customer = await Customer.findOne({_id: customerID});
    
        if(!customer) {
            return res.json({ msg: "Unauthorized access" });
        }

        const shops = await Shop.find();
        // console.log(shops)

        let data = shops.filter((shop) => {
            return shop.name.toLowerCase() === name.toLowerCase();
        })

        if(data.length > 0) {
            return res.json({
                msg: "Shop found",
                data
            })
        } else {
            return res.json({ msg: "No shop found!" });
        }
        
    } catch(err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}