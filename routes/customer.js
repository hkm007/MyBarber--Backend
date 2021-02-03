const express = require('express');
const router = express.Router();
const { 
    createCustomer,
    createAppointment,
    cancelAppointment,
    getAppointment,
    getAllShop,
    getShop
} = require('../controllers/customer');


router.post("/new", createCustomer);
router.post("/appointment/new/:customerID/:shopID", createAppointment);
router.delete("/appointment/cancel/:customerID/:appointmentID", cancelAppointment);
router.get("/appointment/:customerID", getAppointment);
router.get("/shop/:customerID", getAllShop);
router.get("/shop/:customerID/:shopID", getShop);

module.exports = router;