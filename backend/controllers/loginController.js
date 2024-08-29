const { emailService } = require('../services/email');
const { otpGenerator } = require('../services/otp');
const { setToken } = require('../services/token');
const User = require('../models/userModel');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please enter all the fields', success: false });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        if (password != user.password) {
            console.log(`${password} ${user.password}`);
            return res.status(400).json({ message: 'Invalid credentials', success: false });
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
};

module.exports = { loginUser }