import express from 'express';

import { forgotPassword, resetPassword } from '../controller/forgotPasswordController';

const router = express.Router();

router.post('/forgot-password', (req, res, next) => {
    forgotPassword(req, res, next).catch(next);
});

router.post('/reset-password/:token', (req, res, next) => {
    resetPassword(req, res, next).catch(next);
});

export default router;