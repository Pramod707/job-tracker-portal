import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config';

import signupRoute from './router/signupRoute';
import otpRoute from './router/otpRoute';
import loginRoute from './router/loginRoute';
import jobRoute from './router/jobRoute';
import forgotPasswordRoute from './router/forgotPasswordRoute';

import auth from './middleware/auth';
import globalErrorHandler from './middleware/globalErrorHandler';
import httpError from './util/httpError';
import responseMessage from './constant/responseMessage';
import httpResponse from './util/httpResponse';

const app = express();

// MongoDB connection
const mongoURI: string | undefined = config.MONGO_URI;
mongoose.connect(mongoURI!)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((error: Error) => {
        console.error("Error connecting to MongoDB: ", error);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Routes
app.use('/api/signup', signupRoute);
app.use('/api/otp', otpRoute);
app.use('/api/login', loginRoute);
app.use('/api/jobs', jobRoute);
app.use('/api/auth', forgotPasswordRoute)

app.post('/api/verify', auth, (req, res) => {
    httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true });
})

//
app.get('/', auth, (_req: Request, res: Response) => {
    res.send({ message: "Hello" });
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
