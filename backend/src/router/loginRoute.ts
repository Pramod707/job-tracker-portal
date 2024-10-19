import express from 'express';
const router = express.Router();

import { loginUser } from '../controller/loginController';

router.post('/', (req, res, next) => {
    loginUser(req, res, next).catch(next);
});

export default router;