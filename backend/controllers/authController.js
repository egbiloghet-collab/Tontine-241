// authController.js

// Import necessary modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const OTPService = require('../services/OTPService');

// Register controller
exports.register = async (req, res) => {
    const { username, password, email } = req.body;
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
};

// Login controller
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
};

// Send OTP controller
exports.sendOTP = async (req, res) => {
    const { email } = req.body;
    const otp = await OTPService.generateOTP();
    await OTPService.sendOTP(email, otp);
    res.json({ message: 'OTP sent successfully' });
};

// Verify OTP controller
exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    const isValid = await OTPService.verifyOTP(email, otp);
    if (isValid) {
        res.json({ message: 'OTP verified successfully' });
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
};
