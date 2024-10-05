import { NextFunction, Request, Response } from 'express';
import User from '../model/userModel';
import { otpGenerator } from '../service/otp';
import { setToken } from '../service/token';
import { sendResetPasswordEmail, sendVerificationEmail, sendResetSuccess } from '../service/email';
import crypto from 'crypto';
import httpError from '../util/httpError';
import responseMessage from '../constant/responseMessage';
import httpResponse from '../util/httpResponse';
const forgotPassword = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { email } = req.body;
    if (!email) {
      httpError(next, new Error('Email is required'), req, 400);
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
      return;
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;//1h

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = new Date(resetTokenExpiresAt);

    await user.save();

    //send email
    await sendResetPasswordEmail({ email, resetURL: `${process.env.CLIENT_URL}/reset-password/${resetToken}` });
    httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true, message: 'Check your email for password reset link' });
  } catch (error: any) {
    httpError(next, error, req, 500);
  }
};

const resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      httpError(next, new Error('Password is required'), req, 400);
      return;
    }

    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpiresAt: { $gt: Date.now() } });
    if (!user) {
      httpError(next, new Error('Invalid or expired reset token'), req, 400);
      return;
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendResetSuccess({ email: user.email, username: user.email });
    httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true, message: 'Password reset successfully' });
  } catch (error) {
    httpError(next, error, req, 500);
  }
};

export { forgotPassword, resetPassword };
