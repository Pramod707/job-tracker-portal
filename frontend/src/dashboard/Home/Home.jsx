import React from 'react'
import StatsBar from "./StatsBar"
import AssignedTasks from "./AssignedTasks"
import Notifications from './Notifications'

const Home = () => {
  return (
    <div className='flex flex-col gap-[1rem] h-full rounded-xl p-[1rem]'>
      <StatsBar />
      <div className='flex flex-row justify-between items-start gap-[1rem]'>
        <AssignedTasks />
        <Notifications />
      </div>
    </div>
  )
}

export default Home