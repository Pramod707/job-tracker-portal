import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { Spinner } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import {toast} from "react-toastify";
// import { FaLock } from "react-icons/fa";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const { resetPassword, error, isLoading,message } = useAuthStore();
    const {token} = useParams();
    console.log(token+"token");
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        try{await resetPassword(token, password);
        toast.success('Password reset successfull...');
        setIsSubmitted(true);
        setTimeout(() => {
            // navigate('/login'); 
          }, 5000);
         }
          catch(error){
            console.log(error);
            toast.error(error.response?.data?.data.message ||"Error resetting password");  
          }
        
    };

  return (
    <div className="bg-white px-[3rem] py-[3rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      {!isSubmitted?(<form onSubmit={handleSubmit} className='w-full flex flex-col my-[ 2rem] gap-[3rem] justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-[2rem] max-w-[100%] text-center  '>
        <h1 className='text-4xl font-bold'>Reset Password</h1>
      </div>
        <Input
          required
          type="password"
          placeholder='New Password'
          labelPlacement='outside'
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
        // icon={<FaLock />}
          required
          type="password"
        //   label="Password"
          placeholder='Confirm Password'
          className="w-full"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type='submit'
          disabled={isLoading}
          className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
        >
          {isLoading ? <Spinner color="success"/> : 'Set New Password'}
        </Button>
      </form>):(
        <>
        <div className='flex flex-col justify-center items-center gap-[2rem] max-w-[100%] text-center  '>
        <h1 className='text-4xl font-bold'>Continue to Login</h1>
      </div>
        <p className='text-sm mt-4'>
        Back To Login
        <span className='text-[#0037FF]'><a href="/login"> Continue </a></span>
      </p>
      </>)}
      
    </div>
  )
}

export default ResetPasswordPage
