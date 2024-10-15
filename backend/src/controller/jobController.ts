import { NextFunction, Request, Response } from 'express';
import mongoose, { Document } from 'mongoose';

import User from '../model/userModel';
import Job from '../model/jobModel';

import httpResponse from '../util/httpResponse';
import httpError from '../util/httpError';

import responseMessage from '../constant/responseMessage';
import { userInfo } from 'os';
import StudentDetailsModel from '../model/studentDetailsModel';
import Task from '../model/taskModel';

interface JobDocument extends Document {
  companyName: string;
  jobTitle: string;
  jobDescription: {
    responsibility: string;
    experience: string;
    benefits?: string;
    extraDetails?: string;
  };
  locations: string[];
  applicationLink: string;
  postedDate: Date;
  dueDate: Date;
  requiredTechStack?: string[];
  eligibility: string;
  type: string;
  salary: number;
  remote: string;
  addedBy: string;
  addedById: mongoose.Types.ObjectId
}

const createJob = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const email = req.user?.email;
    const user = await User.findOne({ email });

    const {
      companyName,
      jobTitle,
      jobDescription,
      locations,
      applicationLink,
      postedDate,
      dueDate,
      requiredTechStack = [],
      eligibility,
      type,
      remote,
      salary,
    } = req.body;

    const job = await Job.create({
      companyName,
      jobTitle,
      jobDescription,
      locations,
      applicationLink,
      postedDate,
      dueDate,
      techStack: requiredTechStack,
      eligibility,
      type,
      salary,
      remote,
      addedBy: user?.role,
      addedById: user?._id
    }) as JobDocument;

    httpResponse(req, res, 200, responseMessage.SUCCESS, { job, success: true });
  } catch (error: any) {
    httpError(next, error, req, 500);
    return;
  }
}

const getJobs = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
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
    const user = await User.findOne({ email: req.user?.email });

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

    const jobs = await Job.find({
      ...query,
      $or: [
        { addedById: user?._id },
        { addedBy: { $in: ['admin', 'placements'] } },
      ],
    })
      .skip(skip)
      .limit(rowsPerPage)
      .exec();

    const totalJobs = jobs.length;

    const data = {
      jobs,
      totalJobs,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalJobs / rowsPerPage),
      success: true
    };

    httpResponse(req, res, 200, responseMessage.SUCCESS, data);
  } catch (error) {
    httpError(next, error, req, 500);
  }
}

const saveJob = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const email = req.user?.email;
    const user = await User.findOne({ email });
    if (!user) {
      httpError(next, new Error(responseMessage.NOT_FOUND('User')), req, 404);
      return;
    }
    const { jobId, status, task } = req.body as { jobId: string, status: string, task: { taskName: string, description: string, dueDate: Date } | null };

    const job = await Job.findOne({ _id: jobId });
    if (!job) {
      httpError(next, new Error(responseMessage.NOT_FOUND('Job')), req, 404);
      return;
    }
    const studentDetails = await StudentDetailsModel.findOne({ userId: user._id });
    if (!studentDetails) {
      httpError(next, new Error(responseMessage.NOT_FOUND('Student Details')), req, 404);
      return;
    }
    const exists = studentDetails.jobs.applied.find((job) => job.jobId.equals(jobId));

    const { taskName, description, dueDate } = task!;
    const taskDetails = await Task.create({
      userId: user._id as mongoose.Types.ObjectId,
      jobId: job._id as mongoose.Types.ObjectId,
      taskName,
      description,
      dueDate
    });

    if (exists) {
      exists.status = status;
      exists.taskId.push(taskDetails?._id as mongoose.Types.ObjectId);
    } else {
      studentDetails.jobs.applied.push({ jobId: job._id as mongoose.Types.ObjectId, taskId: [], status });
      studentDetails.jobs.applied[studentDetails.jobs.applied.length - 1].taskId.push(taskDetails?._id as mongoose.Types.ObjectId);
    }

    await studentDetails.save();
    httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true, message: 'Job applied successfully' });
  } catch (error) {
    httpError(next, error, req, 500);
    return;
  }
}

export { createJob, getJobs, saveJob };
