import { Button } from '@nextui-org/react'
import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContactCard from './ContactCard';
import AddIcon from '@mui/icons-material/Add';

const Contacts = () => {
  const ContactsList=()=>{
    if(false){
      return (
        <div className='grid grid-cols-3 gap-[1rem]'>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
      );
    }
    else{
      return(
        <div className='flex flex-col justify-center items-center py-[4rem] gap-[2rem]'>
          <img src="/placeholders/home_contacts.svg" alt="contacts" draggable={false} />
          <div className='flex flex-col justify-center items-center'>
            <h2 className='font-semibold text-[#3F5D5A]'>There's no people in your workspace</h2>
            <p className='text-[#72908D] text-sm'>Start inviting your co-workers now!</p>
          </div>
        </div>
      )
    }
  }
  return (
    <div className='bg-white border border-[#EDF1F1] w-full h-fit rounded-xl p-[1rem]'>
        <div className='flex flex-row justify-between items-center border-b-3 border-dotted pb-[1rem] mb-[1rem]'>
          <h1 className='text-2xl font-black'>Contacts</h1>
          <div className='flex flex-row justify-center items-center gap-[1rem] text-[#72908D]'>
            <Button className="bg-white border border-[#EDF1F1] text-[#72908D]">
            Frequent Collaborators <span><ImportExportIcon /></span>
            </Button>

            <Button isIconOnly={true} className="bg-white border border-[#EDF1F1] flex items-center justify-center text-[#72908D]">
              <span><MoreVertIcon /></span>
            </Button>

            <Button isIconOnly={true} className="bg-[#0037FF] border border-[#002CCC] flex items-center justify-center text-white">
              <span><AddIcon /></span>
            </Button>
          </div>
        </div>

        {/* Contacts Grid */}
        {ContactsList()}
    </div>
  )
}

export default Contacts