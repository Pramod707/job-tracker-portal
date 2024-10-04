import express from "express";

import { otpVerification } from "../controller/otpVerification";
import auth from '../middleware/auth';

const app = express();

app.post('/', otpVerification);

export default app;