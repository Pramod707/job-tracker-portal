const express = require('express')
const app = express()
const { emailService } = require('../services/email')
const { otpGenerator } = require('../services/otp')
const { setToken, getUser } = require('../services/token')
const User = require('../models/userModel')

app.post('/', async (req, res) => {
    const { username, email, password, rollNumber, phoneNumber } = req.body;

    if (!username || !email || !password || !rollNumber) {
        return res.status(400).json({ message: 'Please enter all the fields' });
    }

    const otp = otpGenerator();

    const user = await User.create({
        name: username,
        email,
        password,
        email,
        phoneNumber,
        otp
    })

    setTimeout(async () => {
        await User.deleteOne({ email })
    }, 10000 * 12)

    const token = setToken(user);
    const resp = await emailService(email, otp, username)
    resp ? res.status(200).json({ token, otp, "success": true }) : res.status(500).json({ "success": false })
})

app.post('/otp', async (req, res) => {
    const { otp: userOtp } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const payload = getUser(token);
    if (!payload) return res.status(500).json({ "success": false })

    const user = await User.findOne({ email: payload.email })
    console.log(user.otp);
    console.log(userOtp);
    if (userOtp == user.otp) {
        user.otp = 0;
        return res.status(200).json({ msg: "Valid otp", "success": true })
    } else {
        await User.deleteOne({ email: payload.email })
        return res.status(500).json({ msg: "Invalid otp", success: false })
    }
})

module.exports = app