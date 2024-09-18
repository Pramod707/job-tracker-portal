import { Button } from '@nextui-org/react'
import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationCard from './NotificationCard';
import AddIcon from '@mui/icons-material/Add';

const Notifications = () => {
  const NotificationsList = () => {
    if (false) {
      return (
        <div className='flex flex-col gap-y-[5px]'>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      );
    }
    else {
      return (
        <div className='flex flex-col justify-center items-center py-[4rem] gap-[2rem]'>
          <img src="/placeholders/home_contacts.svg" alt="Notifications" draggable={false} />
          <div className='flex flex-col justify-center items-center'>
            <h2 className='font-semibold text-[#3F5D5A]'>There are no notifications!</h2>
          </div>
        </div>
      )
    }
  }
  return (
    <div className='bg-white border border-[#EDF1F1] w-full h-fit rounded-xl p-[1rem]'>
      <div className='flex flex-row justify-between items-center border-b-3 border-dotted pb-[1rem] mb-[1rem]'>
        <h1 className='text-2xl font-black'>Notifications</h1>
        <div className='flex flex-row justify-center items-center gap-[1rem] text-[#72908D]'>
          <Button className="bg-white border border-[#EDF1F1] text-[#72908D]">
            Frequent Notifications <span><ImportExportIcon /></span>
          </Button>

          <Button isIconOnly={true} className="bg-white border border-[#EDF1F1] flex items-center justify-center text-[#72908D]">
            <span><MoreVertIcon /></span>
          </Button>
        </div>
      </div>

      {/* Notifications Grid */}
      {NotificationsList()}
    </div>
  )
}

export default Notifications