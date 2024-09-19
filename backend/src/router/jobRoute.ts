import express, { NextFunction, Request, Response } from "express";
import auth from '../middleware/auth';
import { createJob } from '../controller/jobController';
import Job from '../model/jobModel';
import httpResponse from "../util/httpResponse";
import responseMessage from "../constant/responseMessage";
import httpError from "../util/httpError";

const app = express();

app.post('/get-jobs', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { page = '1', rows = '10' } = req.query as { page?: string; rows?: string };
        const criteria = req.body as {
            companyNames?: string | string[];
            jobTitles?: string | string[];
            locations?: string | string[];
            minSalary?: number;
            maxSalary?: number;
            startDate?: string;
            endDate?: string;
            techStacks?: string[];
            types?: string | string[];
            remotes?: string | string[];
        };

        const query: Record<string, any> = {};

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
            query.techStack = Array.isArray(criteria.techStacks) ? { $all: criteria.techStacks } : criteria.techStacks;
        }

        if (criteria.types) {
            query.type = Array.isArray(criteria.types) ? { $in: criteria.types } : criteria.types;
        }

        if (criteria.remotes) {
            query.remote = Array.isArray(criteria.remotes) ? { $in: criteria.remotes } : criteria.remotes;
        }

        const pageNumber = Number(page);
        const rowsPerPage = Number(rows);
        const skip = (pageNumber - 1) * rowsPerPage;

        const jobs = await Job.find(query)
            .skip(skip)
            .limit(rowsPerPage)
            .exec();

        const totalJobs = await Job.countDocuments(query);

        const response = {
            jobs,
            totalJobs,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalJobs / rowsPerPage),
            success: true
        };

        httpResponse(req, res, 200, responseMessage.SUCCESS, response);
    } catch (error) {
        httpError(next, error, req, 500);
    }
});


app.post('/create-job', auth, createJob);

export default app;