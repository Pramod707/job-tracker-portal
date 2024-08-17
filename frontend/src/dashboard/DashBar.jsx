import React from 'react'

const DashBar = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-fit p-[1rem]'>
        {/* Page Title */}
        <div className='w-full'>
            <h1 className='text-2xl font-black'>My Tasks</h1>
            <h3 className='text-[#4F7471]'>Manage all your tasks in one place</h3>
        </div>
        {/* Utilities */}
        <div className='w-full flex flex-row justify-center items-center'>
            {/* Searchbar */}
            <div className='bg-[#EDF1F1] py-[0.5rem] px-[1rem] flex flex-row justify-center items-center w-fit rounded-lg gap-[0.5rem] text-[#494e4e]'>
                <img src="/mini_icons/search.svg" alt="" />
                <input type="text" name="search" id="search" className='bg-transparent outline-none' placeholder='Search anything' />
                <div className='flex flex-row justify-center items-center gap-[0.5rem]'>
                    <div className='bg-white rounded-lg size-[24px] shadow-sm justify-center items-center flex '>
                    ⌘
                    </div>
                    <div className='bg-white rounded-lg size-[24px] shadow-sm justify-center items-center flex '>
                    F
                    </div>
                </div>
            </div>
            {/* Utils */}
            <div className='flex flex-row justify-center items-center'>
                <img src="/mini_icons/preferences.svg" alt="preferences" />
                <img src="/mini_icons/info.svg" alt="info" />
            </div>
            {/* Profile Button */}

        </div>
    </div>
  )
}

export default DashBar