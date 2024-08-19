const express = require('express');
const { otpVerification } = require('../controllers/otpVerification');
const auth = require('../services/auth');
const app = express();

app.post('/', auth, otpVerification);

module.exports = app;