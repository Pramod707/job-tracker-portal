import { Button } from '@nextui-org/react'
import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TaskCard from './TaskCard';

const AssignedTasks = () => {
  const TaskList=()=>{
    if(false){
      return(
        <div className='flex flex-col justify-center items-center gap-[1rem]'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <Button fullWidth={true} className="text-[#4F7471] font-black bg-[#EDF1F1]">Show All</Button>
        </div>
      )
    }
    else{
      return(
        <div className='flex flex-col justify-center items-center py-[4rem] gap-[2rem]'>
          <img src="/placeholders/home_jobs.svg" alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h2 className='font-semibold text-[#3F5D5A]'>You don't assigned to any task</h2>
            <p className='text-[#72908D] text-sm'>List of tasks you've assigned to will appear here.</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='bg-[#F4F6F6] w-full h-fit rounded-xl p-[1rem]'>
        <div className='flex flex-row justify-between items-center border-b-3 border-dotted pb-[1rem] mb-[1rem]'>
          <h1 className='text-2xl font-black'>Upcoming Tasks & Events</h1>
          <div className='flex flex-row justify-center items-center gap-[1rem]'>
            <Button className="bg-white border border-[#EDF1F1] text-[#72908D]">
              Nearest Due Date <span><ImportExportIcon /></span>
            </Button>

            <Button isIconOnly={true} className="bg-white border border-[#EDF1F1] flex items-center justify-center text-[#72908D]">
              <span><MoreVertIcon /></span>
            </Button>
          </div>
        </div>

        {/* Tasks List */}
        {TaskList()}

    </div>
  )
}

export default AssignedTasks