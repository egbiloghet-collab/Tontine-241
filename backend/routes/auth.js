const express = require('express');
const router = express.Router();

// Mock database
let users = [];

// Register route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }
    // Register new user
    users.push({ username, password });
    return res.status(201).json({ message: 'User registered successfully.' });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validate user credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
    return res.status(200).json({ message: 'Login successful.' });
});

// Send OTP route
router.post('/send-otp', (req, res) => {
    const { username } = req.body;
    // Here would be the logic to send OTP (mock logic)
    return res.status(200).json({ message: 'OTP sent successfully.' });
});

// Verify OTP route
router.post('/verify-otp', (req, res) => {
    const { username, otp } = req.body;
    // Simple mock OTP verification logic
    if (otp !== '123456') {
        return res.status(400).json({ message: 'Invalid OTP.' });
    }
    return res.status(200).json({ message: 'OTP verified successfully.' });
});

module.exports = router;