import React from 'react'
import { Switch, Checkbox, Input } from '@nextui-org/react';

const NotificationsSection = () => {
  return (
    <div className='flex flex-col justify-start gap-[2rem]'>
      <h1 className='font-black text-2xl'>Notifications</h1>
      <div className='flex flex-col gap-[2rem] border-b-2 border-dotted pb-[2rem]'>
        <div className='flex flex-row justify-between items-center gap-[2rem]'>
          <div className='w-full flex flex-col'>
            <h2 className='font-black '>Activity in Your Workspace</h2>
            <p className='text-[#72908D]'>Comments, mentions, task & project invites, reminders, and changes</p>
          </div>
          <Switch color='success'/>
        </div>
        <div className='flex flex-row justify-between items-center gap-[2rem]'>
          <div className='w-full flex flex-col'>
            <h2 className='font-black '>Always Send Email Notification</h2>
            <p className='text-[#72908D]'>Receive email about activity in your workspace</p>
          </div>
          <Switch color='success'/>
        </div>
        <div className='flex flex-row justify-between items-center gap-[2rem]'>
          <div className='w-full flex flex-col'>
            <h2 className='font-black '>Email Digest</h2>
            <p className='text-[#72908D]'>Receive email digest every 8 hours for changes to projects</p>
          </div>
          <Switch color='success'/>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[0.5rem]'>
          <Checkbox color='success'/>
          <p>Do not notify me from:</p>
        </div>
        <div className='flex flex-row gap-[1rem] justify-center items-center'>
          <Input type="time" label="From" size="sm"/>
          <Input type="time" label="To" size='sm'/>
        </div>
      </div>
    </div>
    
  )
}

export default NotificationsSection