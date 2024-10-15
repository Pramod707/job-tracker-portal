import mongoose, { Document, Schema, Model, model } from 'mongoose';

interface ITask extends Document {
    userId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    taskName: string;
    description: string;
    dueDate: Date;
}

const TaskSchema: Schema<ITask> = new Schema<ITask>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    taskName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    dueDate: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
});

// Create and export the Task model
const Task: Model<ITask> = model<ITask>('Task', TaskSchema);
export default Task;
