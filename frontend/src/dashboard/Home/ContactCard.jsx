import React from 'react'

const ContactCard = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center p-[1rem] border border-[#EDF1F1] rounded-lg'>
        {/* Profile Pic */}
        <div className='size-[4rem] border rounded-full'>
            <img src="/profile.png" alt="profile" className='w-full h-full'/>
        </div>
        {/* Name */}
        <h1 className='font-black'>Susan Drake</h1>
        {/* Gmail */}
        <p className='text-[#4F7471] text-wrap'>contact@susandrake.io</p>
    </div>
  )
}

export default ContactCard