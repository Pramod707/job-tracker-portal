import { NextFunction, Request, Response } from 'express';
import Job from '../model/jobModel';
import httpResponse from '../util/httpResponse';
import responseMessage from '../constant/responseMessage';
import httpError from '../util/httpError';

interface JobDocument {
  companyName: string;
  jobTitle: string;
  jobDescription: {
    responsibility: string[];
    experience: string[];
    benefits?: string[];
    extraDetails?: string[];
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
  save: () => Promise<JobDocument>;
}

const createJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
      salary
    } = req.body;

    const job = await Job.create({
      companyName,
      jobTitle,
      jobDescription,
      locations,
      applicationLink,
      postedDate,
      dueDate,
      requiredTechStack,
      eligibility,
      type,
      salary,
      remote,
      addedBy: "Admin"
    }) as JobDocument;
    httpResponse(req, res, 200, responseMessage.SUCCESS, { job, success: true });
  } catch (error: any) {
    httpError(next, error, req, 500);
    return;
  }
}

export { createJob };
