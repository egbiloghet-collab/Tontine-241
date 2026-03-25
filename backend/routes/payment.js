const express = require('express');
const router = express.Router();

// Flutterwave payment integration
router.post('/flutterwave/payment', (req, res) => {
    const { amount, email } = req.body;
    // Logic for processing Flutterwave payment
    res.send('Payment processed with Flutterwave');
});

// CinetPay payment integration
router.post('/cinetpay/payment', (req, res) => {
    const { amount, currency, paymentMethod } = req.body;
    // Logic for processing CinetPay payment
    res.send('Payment processed with CinetPay');
});

module.exports = router;