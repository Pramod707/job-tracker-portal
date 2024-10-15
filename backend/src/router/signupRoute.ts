import express from 'express';

import auth from '../middleware/auth';

import { signupUser, addDetails } from '../controller/signupController';

const router = express.Router();

router.post('/', signupUser);

router.post('/add-details', auth, addDetails);

export default router;
