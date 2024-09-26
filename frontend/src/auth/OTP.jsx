import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useAuthStore } from '../store/authStore';

const OTP = () => {
  const [otpArray, setOtpArray] = useState(Array(4).fill(""));
  const [message, setMessage] = useState("");

  const { error, isLoading, verifyOTP } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedOtpArray = [...otpArray];

    if (/^[0-9]$/.test(value)) {
      updatedOtpArray[index] = value;
      setOtpArray(updatedOtpArray);

      if (index < 3 && value) {
        const nextSibling = document.getElementById(`otp-${index + 1}`);
        if (nextSibling) nextSibling.focus();
      }
    } else if (value === "") {
      updatedOtpArray[index] = "";
      setOtpArray(updatedOtpArray);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otpArray[index] === "") {
      const updatedOtpArray = [...otpArray];
      if (index > 0) {
        updatedOtpArray[index - 1] = "";
        setOtpArray(updatedOtpArray);

        const prevSibling = document.getElementById(`otp-${index - 1}`);
        if (prevSibling) prevSibling.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = otpArray.join("");

    if (otp.length === 4 && /^[0-9]{4}$/.test(otp)) {
      try {
        const data = await verifyOTP(otp);
        console.log(data);

        setMessage("");

        if (location.state?.from === 'signup' || !data.data.user.verified) {
          navigate('/signup/add-details');
        } else {
          navigate('/');
        }
      } catch (err) {
        console.error("Error during OTP submission:", err);
        setMessage(error);
      }
    } else {
      setMessage("Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[1rem]'>
      <h2>The OTP has been successfully sent to Gmail.</h2>
      <Link to='/signup'>Back</Link>
      {message && <p className='text-red-500'>{message}</p>}
      <div className="flex items-center justify-center gap-4">
        {otpArray.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            className='bg-[#e9e9e9] w-[3rem] h-[3rem] rounded-md text-center font-black text-2xl border-3 border-[#4b4b4b]'
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <Button
        className='text-white bg-gradient-to-b from-[#0037FF] to-[#002DD1] border-2 font-semibold'
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Verify OTP
      </Button>
    </div>
  );
};

export default OTP;
