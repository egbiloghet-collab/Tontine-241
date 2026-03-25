// backend/firebase-config.js

const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<YOUR-FIREBASE-PROJECT-ID>.firebaseio.com'
});

module.exports = admin;
