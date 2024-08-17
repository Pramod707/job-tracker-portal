import React from 'react'
import StatsBar from "./StatsBar"
import AssignedTasks from "./AssignedTasks"

const Home = () => {
  return (
    <div className='flex flex-col gap-[1rem] h-full rounded-xl p-[1rem]'>
        <StatsBar />
        <AssignedTasks />
    </div>
  )
}

export default Home