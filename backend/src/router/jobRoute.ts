import express from "express";

import { createJob, getJobs, saveJob } from '../controller/jobController';

const router = express.Router();

router.post('/get-jobs', getJobs);

router.post('/create-job', createJob);

router.post('/save-job', saveJob);

export default router;