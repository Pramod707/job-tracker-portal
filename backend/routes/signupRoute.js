const express = require('express');
const app = express();

const { signupUser, addDetails } = require('../controllers/signupController');

app.post('/',signupUser);

app.post('/add-details', addDetails);

module.exports = app;
