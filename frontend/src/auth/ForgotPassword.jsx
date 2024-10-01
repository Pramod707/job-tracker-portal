import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useAuthStore } from '../store/authStore'; 
import { Spinner } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword, error, isLoading } = useAuthStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      setEmail("");
      toast.success("Email sent successfully");
    } catch (err) {
      toast.error("Error during password reset:", err);
      
    }
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      {!isSubmitted ? (<form onSubmit={handleSubmit} className='w-full flex flex-col gap-[1rem] justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-[1rem] max-w-[80%] text-center  '>
        <h1 className='text-2xl font-bold'>Forgot Password</h1>
        </div>
        <p className="text-gray-600">Enter your email to reset your password</p>
        <Input
          required
          type="email"
          label="Email"
          placeholder='johndoe@gmail.com'
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <Button
          type='submit'
          disabled={isLoading}
          className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
          >
          {isLoading ? <Spinner color="success"/> : 'Send Reset Link'}
        </Button>
      </form>) : (
        <p className='text-lg bold mt-4'>Please check your email to reset your password.</p>
      )}

      <p className='text-sm mt-4'>
        Back To Login
        <span className='text-[#0037FF]'><a href="/login"> Login </a></span>
      </p>
    </div>
  );
}

export default ForgotPassword;
