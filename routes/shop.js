const express = require('express');
const router = express.Router();
const { 
    createShop,
    getAppointment,
    acceptAppointment,
    declineAppointment
} = require('../controllers/shop');


router.post("/new", createShop);
router.get("/appointment/:shopID", getAppointment);
router.put("/appointment/accept/:shopID/:appointmentID", acceptAppointment);
router.put("/appointment/decline/:shopID/:appointmentID", declineAppointment);

module.exports = router;