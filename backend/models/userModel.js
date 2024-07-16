const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  securityQuestions: {
    type: [{
      question: {
        type: String,
        required: true,
        trim: true
      },
      answer: {
        type: String,
        required: true,
        trim: true
      }
    }],
    validate: {
      validator: function (v) {
        return v.length >= 0;
      },
      message: props => `At least 3 security questions are required`
    }
  },
  clgInfo: {
    type: Schema.Types.ObjectId,
    ref: 'ClgInfo'
  },
  otp:{
    type:Number
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
