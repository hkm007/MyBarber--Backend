const express = require('express');
const router = express.Router();
const { 
    getCustomerAppointment,
    getShopAppointment,
    createAppointment,
    cancelAppointment,
    acknowledgeAppointment
} = require('../controllers/appointment');


router.get("/appointment/:customerID", getCustomerAppointment);
router.get("/appointment/:shopID", getShopAppointment);
router.post("/new/appointment/:customerID", createAppointment);
router.post("/acknowledge/appointment/:shopID/:appointmentID", acknowledgeAppointment);
router.delete("/cancel/appointment/:customerID/:appointmentID", cancelAppointment);


module.exports = router;