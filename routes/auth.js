const express = require('express');
const router = express.Router();
const { 
    createCustomer,
    createShop
} = require('../controllers/auth');


router.post("/new/customer", createCustomer);
router.post("/new/shop", createShop);

module.exports = router;