import { Button } from '@nextui-org/react'
import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TaskCard from './TaskCard';

const AssignedTasks = () => {
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
        <div className='flex flex-col justify-center items-center gap-[1rem]'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <Button fullWidth={true} className="text-[#4F7471] font-black bg-[#EDF1F1]">Show All</Button>
        </div>

    </div>
  )
}

export default AssignedTasks