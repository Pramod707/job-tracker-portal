import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='hidden px-4 py-[1rem] md:flex flex-col gap-[2rem]'>
      <Link to='/'>
        <img src="/logo.svg" alt="logo" draggable={false} />
      </Link>   

      <ul className="w-[256px] flex flex-col gap-[1rem]">
        <li>
          <a href="##" className='flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] py-[0.5rem] bg-white rounded-md shadow-sm hover:bg-[#ececec] transition-all'>
            <img src="/mini_icons/home.svg" alt="home" />
            <p className='font-black'>Home</p>
          </a>
        </li>

        <li>
          <a href="##" className='flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] py-[0.5rem] hover:bg-[#ececec] transition-all text-[#4F7471]'>
            <img src="/mini_icons/jobtracking.svg" alt="jobtracking" />
            <p className='font-black'>Job Tracking</p>
          </a>
        </li>

        <li>
          <a href="##" className='flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] py-[0.5rem] hover:bg-[#ececec] transition-all text-[#4F7471]'>
            <img src="/mini_icons/mytasks.svg" alt="mytasks" />
            <p className='font-black'>My Tasks</p>
          </a>
        </li>

        <li>
          <a href="##" className='flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] py-[0.5rem] hover:bg-[#ececec] transition-all text-[#4F7471]'>
            <img src="/mini_icons/notifications.svg" alt="notifications" />
            <p className='font-black'>Notifications</p>
          </a>
        </li>

        <li>
          <a href="##" className='flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] py-[0.5rem] hover:bg-[#ececec] transition-all text-[#4F7471]'>
            <img src="/mini_icons/analytics.svg" alt="analytics" />
            <p className='font-black'>Analytics</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar