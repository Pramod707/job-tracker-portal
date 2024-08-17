import React from 'react'

const StatsBar = () => {
  return (
    <div className='hidden lg:flex flex-row justify-between items-center border border-[#EDF1F1] rounded-xl text-[#72908D] px-[2rem] py-[2rem]'>
      <div className='flex flex-col gap-[1rem] border-r-3 border-dotted w-full mx-[1rem]'>
        <p>Total Project</p>
        <h1 className='text-2xl font-black'>1</h1>
      </div>

      <div className='flex flex-col gap-[1rem] border-r-3 border-dotted w-full mx-[1rem]'>
        <p>Total Tasks</p>
        <h1 className='text-2xl font-black'>3</h1>
      </div>

      <div className='flex flex-col gap-[1rem] border-r-3 border-dotted w-full mx-[1rem]'>
        <p>Assigned Tasks</p>
        <h1 className='text-2xl font-black'>0</h1>
      </div>

      <div className='flex flex-col gap-[1rem] border-r-3 border-dotted w-full mx-[1rem]'>
        <p>Completed Tasks</p>
        <h1 className='text-2xl font-black'>0</h1>
      </div>

      <div className='flex flex-col gap-[1rem] w-full'>
        <p>Overdue Tasks</p>
        <h1 className='text-2xl font-black'>0</h1>
      </div>
    </div>
  )
}

export default StatsBar