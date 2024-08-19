import React from 'react'
import { Button, Input } from '@nextui-org/react'

const Account = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-[2rem]'>
      <h1 className='font-black text-2xl'>Account</h1>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='font-black'>Profile Picture</h2>
        <div className='flex flex-row  justify-start items-center gap-[1rem]'>
          <img src="/profile.png" alt="Profile" className='w-[4rem] border-2 rounded-full p-[0.1rem]' />
          <Button className='bg-transparent border border-gray-600'>Change</Button>
          <Button className='bg-red-100 border border-red-400'>Remove</Button>
        </div>
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='font-black'>Your Name</h2>
        <Input variant='bordered' size='lg' placeholder='John Doe' />
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='font-black'>Email</h2>
        <Input variant='bordered' size='lg' placeholder='john@abc.com' />
      </div>
    </div>
  )
}

export default Account