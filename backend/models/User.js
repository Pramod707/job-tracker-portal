const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const UserSchema = new mongoose.Schema({
    name:String,
    roll_number:String,
    email: String,
    password:String,
    branch:String,
    joining_year:Number,
    techStack:[String],
    interests:String,
   jobs:[{
    jobid: Schema.Types.ObjectId,
    status:String,
    taskId: Schema.Types.ObjectId 
  }]

})
 
module.exports = mongoose.model('User', UserSchema);