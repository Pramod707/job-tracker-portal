import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import validator from 'validator';

import User from '../model/userModel';

import { sendResetPasswordEmail, sendResetSuccess } from '../service/email';

import httpError from '../util/httpError';
import httpResponse from '../util/httpResponse';

import responseMessage from '../constant/responseMessage';

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

    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    };

    const validPassword = validator.isStrongPassword(password, options);
    if (!validPassword) {
      httpError(next, new Error("Password is not strong enough"), req, 400);
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

    const resp = await sendResetSuccess({ email: user.email, username: user.email });
    if (resp) {
      httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true, message: 'Password reset successfully' });
    } else {
      httpError(next, new Error('Failed to send email. Try again.'), req, 500);
      return;
    }
  } catch (error) {
    httpError(next, error, req, 500);
  }
};

export { forgotPassword, resetPassword };
