import React from 'react'
import {Input, Button} from "@nextui-org/react";

const Login = () => {
  return (
    <div className="bg-white px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[2rem] rounded-xl">
      <div className='flex flex-col justify-center items-center gap-[1rem] max-w-[80%] text-center border-b py-[2rem] border-dotted border-[#adadad]'>
        <h1 className='text-2xl font-bold'>Signup</h1>
        <p>By signing up, I agree to the taskhub
          <span className='text-[#0037FF]'><a href="##"> Privacy Policy </a></span>
          and
          <span className='text-[#0037FF]'><a href="##"> Terms of Service </a></span>
        </p>
      </div>


      <form onSubmit={""} className='w-full flex flex-col gap-[1rem] justify-center items-center'>
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder='johndoe@gmail.com'
          className="w-full"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder='**********'
          className="w-full"
        />

        {/* CTA Buttons */}
        <Button
          className='bg-white border-2 border-[#0037FF32] text-[#0037FF] shadow-md w-fit'
        >Send OTP</Button>
        <Button
          className='w-full text-white bg-gradient-to-b from-[#0037FF] to-[#002DD1] border-2'
        >Sign Up with Email</Button>
      </form>
    </div>
  )
}

export default Login