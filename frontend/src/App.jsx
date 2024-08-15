import React from 'react'
import { Routes, Route } from 'react-router-dom';
import OtpInput from './auth/OTP';
import Signup from './auth/Signup';
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import Sidebar from './components/Sidebar'
import Details from './auth/Details'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/add-details' element={<Details />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<OtpInput />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </>
  )
}

export default App;