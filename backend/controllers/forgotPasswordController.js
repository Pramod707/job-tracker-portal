const { User } = require('../models/userModel');
const { otpGenerator } = require('../services/otp');

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!user.email) {
            return res.status(400).json({ message: 'email is required', success: false });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'user not found', success: false });
        }

        const otp = otpGenerator();
        user.otp = otp;
        await user.save();

        setTimeout(async () => {
            user.otp = 0;
            await user.save();
        }, 10000 * 12);
        const token = setToken(user);
        const resp = await emailService(email, otp);
        if (resp) {
            return res.status(200).json({ token, otp, success: true });
        } else {
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } catch (error) {
        console.log(error);
    }
}

const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ message: 'Please enter all the fields', success: false });
        }
        const email=req.user;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        user.password = password;
        await user.save();
        return res.status(200).json({ message: 'Password reset successful', success: true });
    } catch (error) {
        console.log(error);
    }
}