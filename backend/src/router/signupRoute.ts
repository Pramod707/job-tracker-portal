import express from 'express';

import auth from '../middleware/auth';

import { signupUser, addDetails } from '../controller/signupController';

const router = express.Router();

router.post('/', (req, res, next) => {
    signupUser(req, res, next).catch(next);
});

router.post('/add-details', auth, (req, res, next) => {
    addDetails(req, res, next).catch(next);
});

export default router;
