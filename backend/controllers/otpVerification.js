const User = require('../models/userModel');

const otpVerification = async (req, res) => {
    try {
        const { otp: userOtp } = req.body;
        const token = req.headers.authorization.split(' ')[1];
        
        const user = await User.findOne({ email: req.user });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (userOtp == user.otp) {
            user.verified = true;
            user.otp = 0;
            await user.save();
            return res.status(200).json({ message: 'Valid otp', success: true });
        } else {
            user.otp = 0;
            return res.status(400).json({ message: 'Invalid otp', success: false });
        }
    } catch (error) {
        console.error('Error during OTP verification:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = { otpVerification };