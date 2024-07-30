import { Button } from '@nextui-org/react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState(Array(4).fill(''));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if a digit was entered
      if (value !== '' && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    alert(`Entered OTP is: ${otp.join('')}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6 rounded w-96 h-1/2 justify-center flex flex-col">
      <Link to="/" ><Button>Back</Button> </Link>
        <h2 className="text-2xl font-bold mb-4 text-center">OTP Verification</h2>
        <div className="flex justify-center mb-4">
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 mx-1 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <Link to="/signup">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Verify OTP
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OtpVerification;