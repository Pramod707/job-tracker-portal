import mongoose, { Document, Schema } from 'mongoose';

type Branch = 'Computer Science' | 'Electronics and Communication' | 'Mechanical' | 'Civil' | 'Electrical' | 'Information Technology' | 'Computer Science DS' | 'Computer Science AI&ML' | 'Computer Science IoT';
type Interest = 'govt job' | 'internship' | 'pvt job' | 'core job' | 'mtech' | 'ms';
type JobStatus = 'applied' | 'not applied' | 'shortlisted' | 'rejected' | 'declined' | 'coding round' | 'interview' | 'technical interview' | 'hr interview' | 'aptitude test';

interface JobStatusDetail {
  jobId: mongoose.Types.ObjectId;
  taskId: mongoose.Types.ObjectId;
  status: string;
}

interface StudentDetails extends Document {
  userId: mongoose.Types.ObjectId;
  branch: string;
  joiningYear: string;
  intrests: string;
  techStack: string[];
  jobs: {
    applied: JobStatusDetail[];
  };
}

const studentDetailsSchema = new Schema<StudentDetails>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  branch: {
    type: String,
    enum: ['Computer Science', 'Electronics and Communication', 'Mechanical', 'Civil', 'Electrical', 'Information Technology', 'Computer Science DS', 'Computer Science AI&ML', 'Computer Science IoT'] as Branch[],
    required: true,
    trim: true
  },
  joiningYear: {
    type: String,
    required: true,
    min: [2007, 'Joining year must be after 2007'],
    max: [new Date().getFullYear(), 'Joining year cannot be in the future']
  },
  intrests: {
    type: String,
    enum: ['govt job', 'internship', 'pvt job', 'core job', 'mtech', 'ms'] as Interest[],
    required: true,
    trim: true
  },
  techStack: {
    type: [String],
    default: []
  },
  jobs: {
    applied: [{
      jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
      },
      taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
      },
      status: {
        type: String,
        enum: ['applied', 'not applied', 'shortlisted', 'rejected', 'declined', 'coding round', 'interview', 'technical interview', 'hr interview', 'aptitude test'] as JobStatus[],
        default: 'not applied'
      }
    }]
  }
}, {
  timestamps: true
});

const StudentDetailsModel = mongoose.model<StudentDetails>('StudentDetails', studentDetailsSchema);

export default StudentDetailsModel;
