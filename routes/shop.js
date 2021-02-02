const express = require('express');
const router = express.Router();
const { 
    getAllShop,
    getShop
} = require('../controllers/shop');


router.get("/shop/:customerID", getAllShop);
router.post("/shop/:customerID", getShop);

module.exports = router;