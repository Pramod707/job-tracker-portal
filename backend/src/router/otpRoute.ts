import express from "express";

import { otpVerification } from "../controller/otpVerification";

const router = express.Router();

router.post('/', otpVerification);

export default router;