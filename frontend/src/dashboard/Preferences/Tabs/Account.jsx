import React from 'react'
import { Button } from '@nextui-org/react'

const Account = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-[2rem]'>
      <h1 className='font-black text-2xl'>Account</h1>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='font-black'>Profile Picture</h2>
        <div className='flex flex-row  justify-start items-center gap-[1rem]'>
          <img src="/profile.png" alt="Profile" className='w-[4rem]' />
          <Button className='bg-transparent border border-gray-600'>Change</Button>
          <Button className='bg-red-100 border border-red-400'>Remove</Button>
        </div>

        

      </div>
    </div>
  )
}

export default Account