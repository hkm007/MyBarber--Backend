const express = require('express');
const router = express.Router();
const { 
    createShop,
    getAllAppointment,
    getNewAppointment,
    acceptAppointment,
    declineAppointment
} = require('../controllers/shop');


router.post("/new", createShop);
router.get("/appointment/:shopID", getAllAppointment);
router.get("/appointment/new/:shopID", getNewAppointment);
router.put("/appointment/accept/:shopID/:appointmentID", acceptAppointment);
router.put("/appointment/decline/:shopID/:appointmentID", declineAppointment);

module.exports = router;