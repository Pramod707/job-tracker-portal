import React from 'react'

const NotificationCard = () => {
  return (
    <div className='flex flex-row w-full justify-start items-center gap-x-2 p-[1rem] border border-[#EDF1F1] rounded-lg'>
      <span className="font-semibold rounded-full px-2 py-1 text-white bg-gray-400">
        G
      </span>
      {/* Name */}
      <h1 className='font-black'>Data Analyst at Google</h1>
      {/* Notif */}
      <p className='text-[#4F7471] text-wrap'>Exam in 2 hours</p>
    </div>
  )
}

export default NotificationCard