import React, { useRef, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DashBar = () => {
    // Reference to the search input
    const searchInputRef = useRef(null);

    useEffect(() => {
        // Function to handle keydown events
        const handleKeyDown = (event) => {
            // Check if Ctrl or Cmd + F is pressed
            if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
                event.preventDefault();
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='flex flex-row justify-between items-center w-full h-fit'>
            {/* Page Title */}
            <div className='w-full'>
                <h1 className='text-2xl font-black'>My Tasks</h1>
                <h3 className='text-[#4F7471]'>Manage all your tasks in one place</h3>
            </div>
            {/* Utilities */}
            <div className='w-full hidden md:flex flex-row justify-end items-center gap-[2rem]'>
                {/* Searchbar */}
                <div className='bg-[#EDF1F1] py-[0.5rem] px-[1rem] flex flex-row justify-center items-center w-fit rounded-lg gap-[0.5rem] text-[#494e4e]'>
                    <img src="/mini_icons/search.svg" alt="search" className='select-none' draggable={false} />
                    <input type="text" ref={searchInputRef} name="search" id="search" className='bg-transparent outline-none' placeholder='Search anything' />
                        <div className='flex flex-row justify-center items-center gap-[0.5rem] select-none text-[#95ACAA]'>
                        <div className='bg-white rounded-lg size-[24px] shadow-sm justify-center items-center flex'>
                            ⌘
                        </div>
                        <div className='bg-white rounded-lg size-[24px] shadow-sm justify-center items-center flex'>
                            F
                        </div>
                    </div>
                </div>
                
                {/* Utils */}
                <div className='flex flex-row justify-center items-center border-l border-r border-[#B9C7C6] px-[1rem] select-none gap-[1rem]'>
                    <button className='flex-shrink-0'>
                        <img src="/mini_icons/preferences.svg" alt="preferences" className='w-[28px] h-[28px]' draggable={false} />
                    </button>
                    
                    <button className='flex-shrink-0'>
                        <img src="/mini_icons/info.svg" alt="info" className='w-[28px] h-[28px]' draggable={false} />
                    </button>
                </div>

                
                {/* Profile Button */}
                <AccountCircleIcon className=' bg-[#DCE3E3] border-[#B9C7C6] rounded-full w-[80px] h-[80px] select-none'/>
            </div>

        </div>
    )
}

export default DashBar