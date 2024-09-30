import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { Spinner } from "@nextui-org/react";

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { login, error, isLoading } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(formDetails.email, formDetails.password)
      setMessage("");
      setFormDetails({ email: "", password: "" });
      navigate('/otp', { state: { from: 'login' } });
    } catch (err) {
      console.error("Error during login:", err);
      setMessage(error);
    }
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      <div className='flex flex-col justify-center items-center gap-[1rem] max-w-[80%] text-center border-b py-[2rem] border-dotted border-[#adadad]'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <p>By logging in, I agree to the taskhub
          <span className='text-[#0037FF]'><a href="/privacypolicy"> Privacy Policy </a></span>
          and
          <span className='text-[#0037FF]'><a href="/terms&conditions"> Terms of Service </a></span>
        </p>
      </div>

      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleLogin} className='w-full flex flex-col gap-[1rem] justify-center items-center'>
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
          placeholder='**********'
          className="w-full"
          value={formDetails.password}
          onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
        />

        <Button
          type='submit'
          disabled={isLoading}
          className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
        >
          {isLoading ? <Spinner color="primary"/> : 'Send OTP'}
        </Button>
      </form>
    </div>
  );
}

export default Login;
