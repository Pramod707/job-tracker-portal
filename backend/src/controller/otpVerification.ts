import { NextFunction, Request, Response } from 'express';
import User from '../model/userModel';
import httpError from '../util/httpError';
import responseMessage from '../constant/responseMessage';
import httpResponse from '../util/httpResponse';

interface UserDocument {
  email: string;
  otp: string;
  verified: boolean;
  save: () => Promise<UserDocument>;
}

const otpVerification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { otp: userOtp } = req.body;
    const user = await User.findOne({ email: req.user }) as UserDocument | null;

    if (!user) {
      httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
      return;
    }

    if (userOtp === user.otp) {
      user.verified = true;
      user.otp = '';
      await user.save();
      httpResponse(req, res, 200, 'Valid OTP', null);
    } else {
      user.otp = '';
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
