User Schema
    name S
    roll_number S
    email S
    password S
    branch S
    joining_year N
    techStack//[java, c, ] A
    intrests S
    Jobs{ O
        jobid ObjectId
        status enum
        taskId ObjectId
    }


Jobs Schema
    company_name S
    job_description S
    location S
    applicationLink S
    posted_date date
    due_date date
    techStack A
    eligibility S
    type //internship,part time, fulltime , remote enum
    addedBy S

Task Schema
    user ObjectId
    task name S
    description S
    due date date
    status