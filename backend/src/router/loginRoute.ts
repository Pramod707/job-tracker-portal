import express from 'express';
const router = express.Router();

import { loginUser } from '../controller/loginController';

router.post('/', loginUser);

export default router;