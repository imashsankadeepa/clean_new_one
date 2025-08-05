// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/BookingHandler');

router.post('/create', createBooking);

module.exports = router;
