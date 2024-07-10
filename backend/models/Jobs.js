const mongoose=require('mongoose');
const JobsSchema=new mongoose.Schema({
    company_name:String,
    job_description:String,
    location:String,
    applicationLink:String,
    posted_date:Date,
    due_date:Date,
    req_techStack:[String],
    eligibility:String,
    type :String,//internship,part time, fulltime , remote S
    addedBy:String
})

module.exports=mongoose.model('Jobs',JobsSchema);