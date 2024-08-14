const express = require('express');
const app = express();
const { otpVerification } = require('../controllers/otpVerification');

app.post('/', otpVerification);

module.exports = app