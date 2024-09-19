import express, { NextFunction, Request, Response } from "express";
import auth from '../middleware/auth';
import { forgotPassword, resetPassword } from '../controller/forgotPasswordController';

const app = express();

app.post('/forgot-password', forgotPassword);

app.post('/reset-password', auth, resetPassword);

export default app;