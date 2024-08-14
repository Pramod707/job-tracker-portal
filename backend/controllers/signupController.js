const { emailService } = require('../services/email');
const { otpGenerator } = require('../services/otp');
const { setToken, getUser } = require('../services/token');

const validator = require('validator');

const User = require('../models/userModel');
const UserInfo = require('../models/studentDetailsModel');

const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please enter all the fields' });
        }

        const options = {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        };
    
        const validPassword = validator.isStrongPassword(password, options);
        if(!validPassword) {
            return res.status(400).json({ message: 'Password is not strong enough' });
        }

        const otp = otpGenerator();

        const user = await User.create({
            email,
            password,
            otp
        });

        setTimeout(async () => {
            await User.deleteOne({ email });
        }, 10000 * 12);

        const token = setToken(user);
        const resp = await emailService(email, otp);
        if (resp) {
            return res.status(200).json({ token, otp, success: true });
        } else {
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } catch (error) {
        console.error('Error during user creation:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const addDetails = async (req, res) => {
    try {
        const { username, phoneNumber, securityQuestions, branch, joiningYear, intrests, techStack, } = req.body;
        const token = req.headers.authorization.split(' ')[1];
        const payload = getUser(token);
        if (!payload) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }
        const user = await User.findOne({ email: payload.email });

        user.name = username;
        user.phoneNumber = phoneNumber;
        user.securityQuestions = securityQuestions;
        await user.save();

        const detailsExists = await UserInfo.findOne({ userId: user._id });
        if (detailsExists) {
            detailsExists.branch = branch;
            detailsExists.joiningYear = joiningYear;
            detailsExists.intrests = intrests;
            detailsExists.techStack = techStack;
            await detailsExists.save();
        }
        else {
            const details = await UserInfo.create({
                userId: user._id,
                branch,
                joiningYear,
                intrests,
                techStack
            });
        }


        return res.status(200).json({ success: true, message: 'Details added successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = { signupUser, addDetails }