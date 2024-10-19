import express from 'express';

import { otpVerification } from '../controller/otpVerification';

const router = express.Router();

router.post('/', (req, res, next) => {
    otpVerification(req, res, next).catch(next);
}
);

export default router;