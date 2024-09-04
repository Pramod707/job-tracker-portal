import { NextFunction, Request, Response } from 'express';
import validator from 'validator';
import { emailService } from '../service/email';
import { otpGenerator } from '../service/otp';
import { setToken } from '../service/token';
import User from '../model/userModel';
import UserInfo from '../model/studentDetailsModel';
import httpError from '../util/httpError';
import httpResponse from '../util/httpResponse';
import responseMessage from '../constant/responseMessage';

interface SignupRequest extends Request {
    body: {
        email: string;
        password: string;
    };
}

const signupUser = async (req: SignupRequest, res: Response, next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            httpError(next, new Error("Please enter all the fields"), req, 400);
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

        const OTP = otpGenerator();

        const user = await User.create({
            email,
            password,
            otp: OTP,
        });

        setTimeout(async () => {
            await User.deleteOne({ email, verified: false });
            console.log("user deleted successfully");
            
        }, 120000);

        const token = setToken(user);
        const resp = await emailService({ email, OTP, username: user.email });
        if (resp) {
            httpResponse(req, res, 200, responseMessage.SUCCESS, { token, OTP, success: true });
        } else {
            httpError(next, new Error("Failed to send email"), req, 500);
            return;
        }
    } catch (error) {
        httpError(next, error, req, 500);
        return;
    }
};

interface UserDocument {
    _id: string;
    name: string;
    phoneNumber: string;
    email: string;
    securityQuestions?: Array<{ question: string; answer: string }>;
    otp: string;
    verified: boolean;
    save: () => Promise<UserDocument>;
  }

const addDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, phoneNumber, securityQuestions, branch, joiningYear, intrests, techStack } = req.body;
        const user = await User.findOne({ email: req.user }) as UserDocument | null;

        if (!user) {
            httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
            return;
        }

        user.name = username;
        user.phoneNumber = phoneNumber;
        user.securityQuestions = securityQuestions;
        await user.save();

        const detailsExists = await UserInfo.findOne({ userId: user._id });
        if (detailsExists) {
            detailsExists.branch = branch;
            detailsExists.joiningYear = joiningYear;
            detailsExists.intrests = intrests;
            detailsExists.techStack = techStack;
            await detailsExists.save();
        } else {
            await UserInfo.create({
                userId: user._id,
                branch,
                joiningYear,
                intrests,
                techStack,
            });
        }
        httpResponse(req, res, 200, 'Details added successfully', null);
    } catch (error) {
        httpError(next, error, req, 404);
        return;
    }
};

export { signupUser, addDetails };
