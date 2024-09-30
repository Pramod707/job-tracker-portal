import mongoose, { Document, Schema } from 'mongoose';

interface JobDescription {
  responsibility: string;
  experience: string;
  benefits?: string;
  extraDetails?: string;
}

interface Job extends Document {
  companyName: string;
  jobTitle: string;
  jobDescription: JobDescription;
  salary: number;
  locations: string[];
  applicationLink: string;
  postedDate: Date;
  dueDate: Date;
  techStack: string[];
  eligibility: string;
  type: 'internship' | 'part-time' | 'full-time';
  remote: 'remote' | 'on-site' | 'hybrid';
  addedBy: 'Admin' | 'Placements' | 'You';
}

const jobSchema = new Schema<Job>({
  companyName: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  jobTitle: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  jobDescription: {
    type: new Schema<JobDescription>({
      responsibility: {
        type: String,
        required: true,
        trim: true
      },
      experience: {
        type: String,
        required: true,
        trim: true
      },
      benefits: {
        type: String,
        trim: true
      },
      extraDetails: {
        type: String,
        trim: true
      }
    }),
    required: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000
  },
  locations: {
    type: [String],
    required: true
  },
  applicationLink: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid URL!`
    }
  },
  postedDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  techStack: {
    type: [String],
    default: []
  },
  eligibility: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['internship', 'part-time', 'full-time'],
    default: 'full-time'
  },
  remote: {
    type: String,
    required: true,
    enum: ['remote', 'on-site', 'hybrid'],
    default: 'on-site'
  },
  addedBy: {
    type: String,
    required: true,
    enum: ['Admin', 'Placements', 'You'],
  }
}, {
  timestamps: true
});

const JobModel = mongoose.model<Job>('Job', jobSchema);

export default JobModel;
