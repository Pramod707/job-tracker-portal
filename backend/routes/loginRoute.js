const express = require('express');
const app = express();

const { loginUser } = require('../controllers/loginController');

app.post('/', loginUser);

module.exports = app;