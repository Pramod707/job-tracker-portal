import express from 'express';
const app = express();

import { loginUser } from '../controller/loginController';

app.post('/', loginUser);

export default app;