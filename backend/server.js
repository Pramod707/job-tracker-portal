const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

//routes
const signupRoute=require('./routes/signupRoute');
const otpRoute=require('./routes/otpRoute');
const loginRoute=require('./routes/loginRoute')

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

//middleware
app.use(express.json());
app.use('/api/signup', signupRoute)
app.use('/api/otp', otpRoute)
app.use('/api/login',loginRoute)

app.get('/', (req, res) => {
  res.send("Hello")
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
})
