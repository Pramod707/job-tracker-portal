const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otherInfoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  branch: {
    type: String,
    required: true,
    trim: true
  },
  joiningYear: {
    type: Number,
    required: true,
    min: [2007, 'Joining year must be after 2007'],
    max: [new Date().getFullYear(), 'Joining year cannot be in the future']
  },
  intrests: {
    type: String,
    enum: ['govt job', 'internship', 'pvt job', 'core job', 'mtech', 'ms'],
    required: true,
    trim: true
  },
  techStack: {
    type: []
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
        enum: ['applied', 'not applied', 'shortlisted', 'rejected', 'declined', 'coding round', 'interview', 'technical interview', 'hr interview', 'aptitude test'],
        default: 'not applied'
      }
    }]
  }
}, {
  timestamps: true
});

const studentDetails = mongoose.model('studentDetails', otherInfoSchema);
module.exports = studentDetails;
