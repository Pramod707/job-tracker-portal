import { NextFunction, Request, Response } from 'express';
import User from '../model/userModel';
import httpError from '../util/httpError';
import responseMessage from '../constant/responseMessage';
import httpResponse from '../util/httpResponse';
import { sendWelcomeEmail } from '../service/email';

const otpVerification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { otp: userOtp } = req.body;
    
    
    const user = await User.findOne({
      email: req.user?.email,
      OtpExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
      return;
    }

    if (!user.verified) {
      sendWelcomeEmail({ email: user.email, username: user.email });
    }

    if (userOtp === user.otp) {
      user.verified = true;
      user.otp = undefined;
      await user.save();
      httpResponse(req, res, 200, 'Valid OTP', {
        user: {
          email: user.email,
          verified: user.verified,
          name: user.name
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
