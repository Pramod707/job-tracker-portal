import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

const OTP = () => {
  const [otpArray, setOtpArray] = useState(Array(4).fill(""));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && /^[0-9]$/.test(value)) { // Ensuring only numeric input
      const updatedOtpArray = [...otpArray];
      updatedOtpArray[index] = value;
      setOtpArray(updatedOtpArray);

      if (index < 3) {
        const nextSibling = document.getElementById(`otp-${index + 1}`);
        if (nextSibling) {
          nextSibling.focus();
        }
      }
    }
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[1rem]'>
      <h2>The OTP has been successfully sent to Gmail.</h2>
      <div className="flex items-center justify-center gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <input 
            key={index}
            id={`otp-${index}`}
            type="text"
            className='bg-[#e9e9e9] w-[3rem] h-[3rem] rounded-md text-center font-black flex flex-row justify-center items-center text-2xl border-3 border-[#4b4b4b]'
            maxLength={1}
            value={otpArray[index]}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <Button
        className='text-white bg-gradient-to-b from-[#0037FF] to-[#002DD1] border-2 font-semibold'
        onClick={() => console.log("Entered OTP:", otpArray.join(""))} // You can handle the OTP submission here
      >
        Verify OTP
      </Button>
    </div>
  );
};

export default OTP;
