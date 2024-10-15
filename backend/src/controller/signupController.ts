import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import validator from 'validator';

import { sendVerificationEmail } from '../service/email';
import { otpGenerator } from '../service/otp';
import { setToken } from '../service/token';

import User from '../model/userModel';
import UserInfo from '../model/studentDetailsModel';

import httpError from '../util/httpError';
import httpResponse from '../util/httpResponse';
import { setCookie } from '../util/cookie';

import responseMessage from '../constant/responseMessage';

interface SignupRequest extends Request {
    body: {
        email: string;
        password: string;
        role: string | undefined
    };
}

const signupUser = async (req: SignupRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { email, password, role = "student" } = req.body;

        if (!email || !password) {
            httpError(next, new Error("Please enter all the fields"), req, 400);
            return;
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            httpError(next, new Error("User already exists"), req, 400);
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

        const resp = await sendVerificationEmail({ email, OTP, username: email });
        if (resp) {
            const user = await User.create({
                email,
                password,
                otp: OTP,
                OtpExpiresAt: Date.now() + 2 * 60 * 1000,
                verified: false,
                role
            });
            httpResponse(req, res, 201, responseMessage.SUCCESS, {
                user: {
                    email: user.email,
                    verified: user.verified,
                    name: user.name,
                    role: user.role
                },
                success: true
            });
        } else {
            await User.deleteOne({ email, verified: false });
            httpError(next, new Error("Failed to send email"), req, 500);
            return;
        }
    } catch (error) {
        httpError(next, error, req, 500);
        return;
    }
};


const addDetails = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { username, phoneNumber, rollNumber, securityQuestions, branch, joiningYear, intrests, techStack } = req.body;
        const user = await User.findOne({ email: req.user?.email });

        if (!user) {
            httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
            return;
        }

        user.name = username;
        user.phoneNumber = phoneNumber;

        const detailsExists = await UserInfo.findOne({ userId: user._id });
        if (detailsExists) {
            detailsExists.rollNumber = rollNumber;
            detailsExists.securityQuestions = securityQuestions;
            detailsExists.branch = branch;
            detailsExists.joiningYear = joiningYear;
            detailsExists.intrests = intrests;
            detailsExists.techStack = techStack;
            await detailsExists.save();

            user.studentDetails = detailsExists._id as mongoose.Types.ObjectId;
        } else {
            const details = await UserInfo.create({
                userId: user._id,
                rollNumber,
                securityQuestions,
                branch,
                joiningYear,
                intrests,
                techStack,
            });
            user.studentDetails = details._id as mongoose.Types.ObjectId;
        }
        await user.save();

        const token = setToken(user.email, user.verified, user.name, user.role);
        setCookie(res, token);

        httpResponse(req, res, 200, 'Details added successfully', {
            user: {
                email: user.email,
                verified: user.verified,
                name: user.name,
                role: user.role
            },
            success: true
        });
    } catch (error) {
        httpError(next, error, req, 404);
        return;
    }
};

export { signupUser, addDetails };
