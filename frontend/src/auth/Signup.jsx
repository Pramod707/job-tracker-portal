import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:3001/api/signup', formDetails)
        .then((response) => {
          if (response.data.success) {
            setMessage("");
            document.cookie = `token=${response.data.token}`;
            navigate('/otp');
          }
          else {
            setMessage(response.data.message);
          }
        })
    }
    catch (err) {
      console.log(err);
    } finally {
      setFormDetails({ email: "", password: "" })
    }
    
  }

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

      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={(e) => handleSignup(e)} className='w-full flex flex-col gap-[1rem] justify-center items-center'>
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder='johndoe@gmail.com'
          className="w-full"
          value={formDetails.email}
          onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder='********'
          className="w-full"
          value={formDetails.password}
          onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
        />

        {/* CTA Buttons */}
        <Button
          type="submit"
          className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
        >Send OTP</Button>
      </form>
    </div>
  )
}

export default Signup