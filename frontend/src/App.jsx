import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import OtpInput from './auth/OTP';
import Signup from './auth/Signup';
import Login from './auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import ResetPassword from './auth/ResetPassword';
import Details from './auth/Details';
import Dashboard from './dashboard/Dashboard';
import PrivacyAndPolicy from "./Components/PrivacyAndPolicy"
import TermsAndConditions from './Components/TermsAndConditions'
import { useAuthStore } from './store/authStore';
import ForgotPassword from './auth/ForgotPassword';
import { Spinner } from "@nextui-org/react";
import ResetPasswordPage from './auth/ResetPasswordPage';
// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user.verified) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.verified) {
    return <Navigate to='/' replace />;
  }

  return children;
};

const App = () => {
  const { isCheckingAuth, verifyToken } = useAuthStore();

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (isCheckingAuth) return (
    <div className="flex justify-center items-center h-screen">
      <Spinner color="success" size='lg'/>
    </div>
  );


  return (
    <div className={`h-screen w-full flex flex-col justify-center items-center`}>

      <Routes>
      
      <Route path='/forgot-password' element={
        <RedirectAuthenticatedUser>
          <ForgotPassword />
          </RedirectAuthenticatedUser>
        } />
        <Route path='/' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />

        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
            <Signup />
          </RedirectAuthenticatedUser>
        } />
        <Route path='/signup/add-details' element={
          <Details />
        } />
        <Route path='/login' element={
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
        } />
        <Route path='/otp' element={
          <OtpInput />
        } />
        <Route path='/privacypolicy' element={<PrivacyAndPolicy />} />
        <Route path='/terms&conditions' element={<TermsAndConditions />} />
        <Route
        path='/reset-password/:token'
        element={
          <RedirectAuthenticatedUser>
            <ResetPasswordPage/>
           </RedirectAuthenticatedUser>
        }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default App;
