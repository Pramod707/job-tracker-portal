import React from 'react'
import DashBar from './DashBar'
import StatsBar from './Home/StatsBar'

const Dashboard = () => {
  return (
    <div className='flex flex-col p-[1rem] gap-[2rem] bg-white rounded-md w-full h-full border-[#EDF1F1] border mr-[1rem] my-[0.5rem]'>
      <DashBar />
      <StatsBar />
    </div>
  )
}

export default Dashboard