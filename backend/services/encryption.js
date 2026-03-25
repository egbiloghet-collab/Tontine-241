'use strict';

const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // AES encryption
const key = crypto.randomBytes(32); // Generation of a 256-bit key
const iv = crypto.randomBytes(16); // Initialization vector for CBC mode

/**
 * Encrypts a text using AES-256-CBC algorithm.
 * @param {string} text - The text to encrypt.
 * @returns {string} The encrypted text in hex format.
 */
const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

/**
 * Decrypts a text using AES-256-CBC algorithm.
 * @param {string} encryptedText - The text to decrypt.
 * @returns {string} The decrypted text.
 */
const decrypt = (encryptedText) => {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

module.exports = { encrypt, decrypt };