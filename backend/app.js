const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express()
dotenv.config()

//routes
const signupRoute = require('./routes/signupRoute');
const otpRoute = require('./routes/otpRoute');
const loginRoute = require('./routes/loginRoute');
const jobRoute = require('./routes/jobRoute');

const auth = require('./services/auth');

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB: ", error);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//middleware
app.use('/api/signup', signupRoute);
app.use('/api/otp', otpRoute);
app.use('/api/login', loginRoute);
app.use('/api/jobs', jobRoute);

app.get('/', auth, (req, res) => {
    res.json("Hello");
})

module.exports = app;