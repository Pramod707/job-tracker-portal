import express from 'express';

import auth from '../middleware/auth';
import { signupUser, addDetails } from '../controller/signupController';

const app = express();

app.post('/', signupUser);

app.post('/add-details', auth, addDetails);

export default app;
