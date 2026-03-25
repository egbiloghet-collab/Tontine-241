const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Tontine API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
