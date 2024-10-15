import React, { useState } from 'react'
import { Button } from '@nextui-org/react';
import ChangePassword from '../../../Components/ChangePassword';
const Security = () => {
  return (
    <div className='flex flex-col justify-start gap-[2rem]'>
      <h1 className='font-black text-2xl'>Security</h1>
      <div className='flex flex-col gap-[2rem] border-b-2 border-dotted pb-[2rem]'>
        <div className='flex flex-row justify-between items-center gap-[2rem]'>
          <div className='w-full flex flex-col'>
            <h2 className='font-black '>Password</h2>
            <p className='text-[#72908D]'>Change the password for your account</p>
          </div>
          {/* <Button className='px-[2rem] font-black shadow-sm' variant='bordered'>Change Password</Button> */}
          <ChangePassword/>
        </div>
        <div className='flex flex-row justify-between items-center gap-[2rem]'>
          <div className='w-full flex flex-col'>
            <h2 className='font-black '>Two-Factor Authentication</h2>
            <p className='text-[#72908D]'>Require authentication when you login</p>
          </div>
          <Button className='px-[2rem] font-black shadow-sm' variant='bordered'>Enable</Button>
        </div>
        <div className='flex flex-row justify-between items-center gap-[2rem]'>
          <div className='w-full flex flex-col'>
            <h2 className='font-black '>Security</h2>
            <p className='text-[#72908D]'>Log out of all sessions except this current browser</p>
          </div>
          <Button className='px-[2rem] font-black shadow-sm' variant='bordered'>Log Out All Sessions</Button>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-full flex flex-col'>
          <h2 className='font-black text-red-500'>Delete Account</h2>
          <p className='text-[#72908D] w-[80%]'>Permanently delete the account and remove access from all workspace</p>
        </div>
        <Button className='px-[2rem] font-black shadow-sm' variant='solid' color='danger'>Delete Account</Button>
      </div>
    </div>
  )
}

export default Security