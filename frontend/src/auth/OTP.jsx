import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@nextui-org/react';
import Cookies from 'js-cookie';

const OTP = () => {
  const [otpArray, setOtpArray] = useState(Array(4).fill(""));
  const [message, setMessage] = useState("");
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

  const handleSubmit = async () => {
    const otp = otpArray.join("");

    if (otp.length === 4 && /^[0-9]{4}$/.test(otp)) {
      try {
        const token = Cookies.get('token');
        console.log("token", token);

        const response = await axios.post(
          "http://localhost:3001/api/otp",
          { otp },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setMessage("");
          if (location.state?.from === 'signup') {
            navigate('/signup/add-details');
          } else {
            navigate('/');
          }
        } else {
          setMessage(response.data.message || "Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error during OTP submission:", error);
        setMessage("An error occurred. Please try again later.");
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
      >
        Verify OTP
      </Button>
    </div>
  );
};

export default OTP;
