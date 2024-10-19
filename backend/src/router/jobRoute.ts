import express from 'express';

import { createJob, getJobs, saveJob } from '../controller/jobController';

const router = express.Router();

router.post('/get-jobs', (req, res, next) => {
    getJobs(req, res, next).catch(next);
}
);

router.post('/create-job', (req, res, next) => {
    createJob(req, res, next).catch(next);
});

router.post('/save-job', (req, res, next) => {
    saveJob(req, res, next).catch(next);
});

export default router;