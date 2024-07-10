const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TaskSchema=new mongoose.Schema({
    user :Schema.Types.ObjectId,
    task_name:String,
    description:String,
    due_date:Date
})

module.exports=mongoose.model('Task',TaskSchema);