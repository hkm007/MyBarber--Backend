const Appointment = require('../models/Appointment');
const Customer = require('../models/Customer');
const Shop = require('../models/Shop');

exports.createCustomer = (req, res) => {
    const { name, phone } = req.body;

    if(!name || !phone) {
        return res.json({msg: "Invalid credentials!"});
    }

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
    let shopID = req.params.shopID;

    // validating
    try {
        const customer = await Customer.findOne({_id: customerID});
    
        if(!customer) {
            return res.json({ msg: "Unauthorized access" });
        }
        
        const shop = await Shop.findOne({_id: shopID});

        if(!shop) {
            return res.json({ msg: "No shop found!" });
        } else {
            return res.json({
                msg: "Shop found",
                data: shop
            })
        }
    } catch(err) {
        console.error(err);
        res.json({ msg: 'Something went wrong' });
    }
}