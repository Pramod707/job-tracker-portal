import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import signupRoute from './router/signupRoute';
import otpRoute from './router/otpRoute';
import loginRoute from './router/loginRoute';
import jobRoute from './router/jobRoute';
import forgotPasswordRoute from './router/forgotPasswordRoute';
import logoutRoute from './router/logoutRoute';

import auth from './middleware/auth';
import globalErrorHandler from './middleware/globalErrorHandler';
import responseMessage from './constant/responseMessage';
import httpError from './util/httpError';
import httpResponse from './util/httpResponse';
import connectDb from './db/connectDb';

const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser())

// Routes
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/otp', otpRoute);
app.use('/api/jobs', auth, jobRoute);
app.use('/api/auth', forgotPasswordRoute);
app.use('/api/logout', logoutRoute);

app.post('/api/verify', auth, (req: Request, res: Response) => {
    httpResponse(req, res, 200, responseMessage.SUCCESS, {
        user: req.user,
        success: true
    });
})

//
app.get('/', auth, (req: Request, res: Response) => {
    httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true, message: 'Welcome to Job Portal' })
});

// 404 Handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

// Global Error Handler
app.use(globalErrorHandler)

export default app;
