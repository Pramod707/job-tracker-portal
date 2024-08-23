const Job = require('../models/jobModel');

const createJob = async (req, res) => {
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
        })
        res.status(201).json({ job, success: true });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message, success: false });
    }
}

module.exports = {
    createJob,
}