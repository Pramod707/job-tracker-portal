import React from 'react'
import DashBar from './DashBar'
import ActionBar from './JobTracking/ActionBar'

const Dashboard = () => {
  return (
    <div className='flex flex-col p-[1rem] gap-[2rem] bg-white rounded-md w-full h-full border-[#EDF1F1] border mr-[1rem] my-[0.5rem]'>
      <DashBar />
      <div className='flex flex-col gap-[1rem] border border-[#EDF1F1] h-full rounded-xl'>
        <ActionBar />
      </div>
    </div>
  )
}

export default Dashboard