import { NextFunction, Request, Response } from 'express';

import { otpGenerator } from '../service/otp';
import { sendVerificationEmail } from '../service/email';

import User from '../model/userModel';

import httpError from '../util/httpError';
import httpResponse from '../util/httpResponse';

import responseMessage from '../constant/responseMessage';

const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { email, password } = req.body as { email: string; password: string };

    if (!email || !password) {
      httpError(next, new Error('Please enter all the fields'), req, 400);
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
      return;
    }

    if (password !== user.password) {
      httpError(next, new Error('Invalid credentials'), req, 400);
      return;
    }

    const OTP: string = otpGenerator();

    const resp = await sendVerificationEmail({ email, OTP, username: user.name || user.email });

    if (resp) {
      user.otp = OTP;
      user.OtpExpiresAt = new Date(Date.now() + 2 * 60 * 1000);
      await user.save();

      httpResponse(req, res, 200, responseMessage.SUCCESS, {
        user: {
          email: user.email,
          verified: user.verified,
          name: user.name,
          role: user.role
        },
        success: true
      });
    } else {
      httpError(next, new Error('Failed to send email'), req, 500);
      return;
    }
  } catch (error) {
    httpError(next, error, req, 500);
    return;
  }
};

export { loginUser };
