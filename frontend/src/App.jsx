import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import OtpInput from './auth/OTP';
import Signup from './auth/Signup';
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import Details from './auth/Details';
import Dashboard from './dashboard/Dashboard';
import PrivacyAndPolicy from "./Components/PrivacyAndPolicy"
import TermsAndConditions from './Components/TermsAndConditions'
const App = () => {
  const location = useLocation();

  // Check if the current route is '/'
  const isDashboardRoute = location.pathname === '/';

  return (      
    <div className={`h-screen w-full flex flex-col justify-center items-center`}>
      <Routes>
        <Route path='/' element={isDashboardRoute ? <Dashboard /> : <></>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/add-details' element={<Details />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<OtpInput />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/privacypolicy' element={<PrivacyAndPolicy />} />
        <Route path='/terms&conditions' element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
};

export default App;
