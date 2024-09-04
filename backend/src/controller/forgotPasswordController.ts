import { Request, Response } from 'express';
import User from '../model/userModel';
import { otpGenerator } from '../service/otp';
import { setToken } from '../service/token';
import { emailService } from '../service/email';

interface UserDocument {
  email: string;
  password: string;
  otp: string;
  save: () => Promise<UserDocument>;
}

const forgotPassword = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required', success: false });
    }

    const user = await User.findOne({ email }) as UserDocument | null;
    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    const OTP = otpGenerator();
    user.otp = OTP;
    await user.save();

    setTimeout(async () => {
      user.otp = '';
      await user.save();
    }, 10000 * 12);

    const token = setToken(user);
    const resp = await emailService({email, OTP, username: user.email});

    if (resp) {
      return res.status(200).json({ token, OTP, success: true });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } catch (error: any) {
    console.error('Error in forgotPassword:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const resetPassword = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'Please enter all the fields', success: false });
    }

    const email = req.user as string;
    const user = await User.findOne({ email }) as UserDocument | null;

    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    user.password = password;
    await user.save();

    return res.status(200).json({ message: 'Password reset successful', success: true });
  } catch (error: any) {
    console.error('Error in resetPassword:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export { forgotPassword, resetPassword };
