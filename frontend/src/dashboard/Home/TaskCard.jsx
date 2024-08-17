import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {Button} from '@nextui-org/react'
const TaskCard = () => {
  return (
    <div className='w-full bg-white p-[1rem] rounded-lg shadow-sm'>
        <div className='flex flex-row justify-between items-center'>
            <div>
                <h1 className='font-black'>Interview 1 with Microsoft</h1>
                <div className='flex flex-row justify-start items-center gap-[0.5rem] text-[#4F7471]'>
                    {/* Due Date*/}
                    <div className=' text-sm flex flex-row gap-[0.3rem] justify-start items-center'>
                        <CalendarMonthIcon className='scale-[75%]'/>
                        <span>Due on 25th Nov, 2024</span>
                    </div>

                    <FiberManualRecordIcon className='scale-[50%] text-[#B9C7C6]'/>
                    {/* Due Time */}
                    <div className='text-sm flex flex-row gap-[0.3rem] justify-start items-center'>
                        <CalendarMonthIcon className='scale-[75%]' />
                        <span>9:30 AM</span>
                    </div>
                </div>
            </div>
            <Button isIconOnly={true} className="border bg-transparent text-[#4F7471] border-[#EDF1F1]">
                <RemoveRedEyeOutlinedIcon />
            </Button>
        </div>

    </div>
  )
}

export default TaskCard