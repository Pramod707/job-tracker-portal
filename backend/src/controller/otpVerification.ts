import { NextFunction, Request, Response } from 'express';

import User from '../model/userModel';

import httpError from '../util/httpError';
import httpResponse from '../util/httpResponse';
import { setCookie } from '../util/cookie';

import { sendWelcomeEmail } from '../service/email';
import { setToken } from '../service/token';

import responseMessage from '../constant/responseMessage';

const otpVerification = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { otp: userOtp } = req.body;
    const user = await User.findOne({
      otp: userOtp,
      OtpExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
      return;
    }

    if (!user.verified) {
      sendWelcomeEmail({ email: user.email, username: user.name || user.email });
    }

    if (userOtp === user.otp) {
      user.verified = true;
      user.otp = undefined;
      await user.save();

      const token = setToken(user.email, user.verified, user.name, user.role);
      setCookie(res, token);

      httpResponse(req, res, 200, 'Valid OTP', {
        user: {
          email: user.email,
          verified: user.verified,
          name: user.name,
          role: user.role
        },
        success: true
      });
    } else {
      user.otp = undefined;
      await user.save();
      httpError(next, new Error('Invalid OTP'), req, 400);
      return;
    }
  } catch (error) {
    httpError(next, error, req, 500);
    return;
  }
};

export { otpVerification };
