const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()

dotenv.config()
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use(express.json());
const UserModel = require("./models/User");
const JobsModel= require("./models/Jobs");
const TaskModel=require("./models/Task");


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

//SignUP
app.post("/api/signup", async (req, res) => {
    const { name, roll_number, email,password,branch,joining_year,techStack,interests  } = req.body;

    const exists=await UserModel.find({roll_number})
    if(exists){
        res.json("User Already Exists")
    }
    try {
      await UserModel.create({ name, roll_number, email,password,branch,joining_year,techStack,interests });
      res.json("Success");
    } catch (err) {
      res.json(err);
    }
  });

//Jobs Post
app.post("/api/jobs",async (req,res)=>{
const {company_name,job_description,location,applicationLink,posted_date,due_date,req_techStack,eligibility,type,addedBy}=req.body;
try{
    await JobsModel.create({company_name,job_description,location,applicationLink,posted_date,due_date,req_techStack,eligibility,type,addedBy})
    res.json("Success");
}

catch(err){
    res.json(err);
}
});

app.post("/api/task",async (req,res)=>{
    const {user,task_name,description,due_date}=req.body;
    try{
        await TaskModel.create({user,task_name,description,due_date})
        res.json("Success");
    }
    
    catch(err){
        res.json(err);
    }
    });


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server is RUNNING on "+ PORT);
})
