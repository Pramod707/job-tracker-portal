const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    jobDescription: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: [String],
        required: true,
        trim: true
    },
    applicationLink: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
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
    requiredTechStack: {
        type: [String],
        validate: {
            validator: function(v) {
                return v.length > 0;
            },
            message: props => `At least one technology stack is required`
        }
    },
    eligibility: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['internship', 'part-time', 'full-time', 'remote'],
        trim: true
    },
    addedBy: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Job=mongoose.model('Job', jobSchema);
module.exports = Job;
