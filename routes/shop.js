const express = require('express');
const router = express.Router();
const { 
    createShop,
    getAppointment,
    acknowledgeAppointment
} = require('../controllers/shop');


router.post("/new", createShop);
router.get("/appointment/:shopID", getAppointment);
router.put("/appointment/:appointmentID", acknowledgeAppointment);

module.exports = router;