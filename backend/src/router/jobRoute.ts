import express from "express";

import { createJob, getJobs } from '../controller/jobController';

const router = express.Router();

router.post('/get-jobs', getJobs);

router.post('/create-job', createJob);

export default router;