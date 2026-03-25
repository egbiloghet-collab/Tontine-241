// paymentController.js

// Flutterwave Payment Processing
const flutterwavePayment = (req, res) => {
    // Your Flutterwave payment processing logic here
    res.send('Flutterwave payment processed');
};

// CinetPay Payment Processing
const cinetpayPayment = (req, res) => {
    // Your CinetPay payment processing logic here
    res.send('CinetPay payment processed');
};

module.exports = { flutterwavePayment, cinetpayPayment };