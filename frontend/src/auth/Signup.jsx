import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";

const Signup = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formDetails.email === "" || formDetails.password === "") {
      toast.error("Please enter email and password");
      return;
    }

    try {
      await signup(formDetails.email, formDetails.password);
      navigate('/otp', { state: { from: 'signup' } });
      setFormDetails({ email: "", password: "" });
      toast.success('Otp sent successfully...');
    } catch (err) {
      console.error("Error during signup:", err);
      toast.error(error);
    }
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      <div className='flex flex-col justify-center items-center gap-[1rem] max-w-[80%] text-center border-b py-[2rem] border-dotted border-[#adadad]'>
        <h1 className='text-2xl font-bold'>Signup</h1>
        <p>By signing up, I agree to the taskhub
          <span className='text-[#0037FF]'><a href="/privacypolicy"> Privacy Policy </a></span>
          and
          <span className='text-[#0037FF]'><a href="/terms&conditions"> Terms of Service </a></span>
        </p>
      </div>

      <form onSubmit={handleSignup} className='w-full flex flex-col gap-[1rem] justify-center items-center'>
        <Input
          required
          type="email"
          label="Email"
          placeholder='johndoe@gmail.com'
          className="w-full"
          value={formDetails.email}
          onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
        />
        <Input
          required
          type="password"
          label="Password"
          placeholder='********'
          className="w-full"
          value={formDetails.password}
          onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
        />
        {
          isLoading ?
            <Spinner color="success" />

            :
            <Button
              type="submit"
              disabled={isLoading}
              className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
            >
              Send OTP
            </Button>
        }
      </form>
    </div>
  );
};

export default Signup;
