const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
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
        type: new Schema({
            responsibility: {
                type: [String],
                required: true,
                trim: true
            },
            experience: {
                type: [String],
                required: true,
                trim: true
            },
            benefits: {
                type: [String],
                trim: true
            },
            extraDetails: {
                type: [String],
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
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
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
        enum: ["Admin", "Placements", "You"],
    }
}, {
    timestamps: true
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
