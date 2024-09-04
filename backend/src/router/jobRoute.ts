import express, { Request, Response } from "express";

import auth from '../middleware/auth';
import { createJob } from '../controller/jobController';
import Job from '../model/jobModel';

const app = express();

app.post('/get-jobs', auth, async (req: Request, res: Response) => {
    try {
        const criteria = req.body;

        const query:Record<string, any> = {};

        if (criteria.companyNames) {
            query.companyName = Array.isArray(criteria.companyNames) ? { $in: criteria.companyNames } : criteria.companyNames;
        }

        if (criteria.jobTitles) {
            query.jobTitle = Array.isArray(criteria.jobTitles) ? { $in: criteria.jobTitles } : criteria.jobTitles;
        }

        if (criteria.locations) {
            query.locations = Array.isArray(criteria.locations) ? { $in: criteria.locations } : criteria.locations;
        }

        if (criteria.minSalary != null && criteria.maxSalary != null) {
            query.salary = { $gte: Number(criteria.minSalary), $lte: Number(criteria.maxSalary) };
        }

        if (criteria.startDate && criteria.endDate) {
            query.postedDate = { $gte: new Date(criteria.startDate), $lte: new Date(criteria.endDate) };
        }

        if (criteria.techStacks) {
            query.techStack = Array.isArray(criteria.techStacks) ? { $all: criteria.techStacks } : criteria.requiredTechStacks;
        }

        if (criteria.types) {
            query.type = Array.isArray(criteria.types) ? { $in: criteria.types } : criteria.types;
        }

        if (criteria.remotes) {
            query.remote = Array.isArray(criteria.remotes) ? { $in: criteria.remotes } : criteria.remotes;
        }

        const jobs = await Job.find(query).exec();
        res.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'An error occurred while fetching jobs.' });
    }
});


app.post('/create-job', auth, createJob);

export default app;