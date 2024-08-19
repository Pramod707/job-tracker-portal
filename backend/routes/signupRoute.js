const express = require('express');
const auth = require('../services/auth');
const { signupUser, addDetails } = require('../controllers/signupController');

const app = express();

app.post('/', signupUser);

app.post('/add-details', auth, addDetails);

module.exports = app;
