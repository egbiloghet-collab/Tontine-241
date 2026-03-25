// otp.js

const twilio = require('twilio');

// Twilio credentials
const accountSid = 'your_account_sid'; // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

// Generate OTP
function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

// Send OTP
async function sendOTP(phoneNumber, otp) {
    try {
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}`,
            to: phoneNumber,  // Text this number
            from: '+12345678901' // From a valid Twilio number
        });
        return message;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
}

// Verify OTP
function verifyOTP(inputOtp, generatedOtp) {
    return inputOtp === generatedOtp;
}

module.exports = { generateOTP, sendOTP, verifyOTP };