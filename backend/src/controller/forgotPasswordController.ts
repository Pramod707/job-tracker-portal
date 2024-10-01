import { Request, Response } from 'express';
import User from '../model/userModel';
import { otpGenerator } from '../service/otp';
import { setToken } from '../service/token';
import { sendResetPasswordEmail, sendVerificationEmail ,sendResetSuccess} from '../service/email';
import crypto from 'crypto';
const forgotPassword = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required', success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;//1h

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = new Date(resetTokenExpiresAt);

    await user.save();

    //send email
    await sendResetPasswordEmail({ email, resetURL: `${process.env.CLIENT_URL}/reset-password/${resetToken}` });
    res.status(200).json({ success: true, message: 'Password reset link sent to your email' });
  } catch (error: any) {
    console.error('Error in forgotPassword:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const resetPassword = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const {token} = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'Please enter all the fields', success: false });
    }

    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpiresAt: { $gt: Date.now() } });
    if(!user){
      return res.status(400).json({success:false,message:"Invalid or expired reset token"});
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendResetSuccess({ email: user.email, username: user.email });

    res.status(200).json({ success: true, message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error in resetPassword:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export { forgotPassword, resetPassword };
