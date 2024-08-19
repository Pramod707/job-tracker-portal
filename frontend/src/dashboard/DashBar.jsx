import React, { useRef, useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSidebar } from '../contexts/SidebarContext';
import { Button } from '@nextui-org/react';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const DashBar = () => {
    const searchInputRef = useRef(null);
    const { activeTab, setActiveTab } = useSidebar();
    const [prevTab, setPrevTab] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
                event.preventDefault();
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handlePreferencesClick = () => {
        if (activeTab === 'preferences') {
            setActiveTab(prevTab || 'home');
        } else {
            setPrevTab(activeTab);
            setActiveTab('preferences');
        }
    };

    const handleResumeClick = () => {
        if (activeTab === 'resume') {
            setActiveTab(prevTab || 'home');
        } else {
            setPrevTab(activeTab);
            setActiveTab('resume');
        }
    };

    return (
        <div className='flex flex-row justify-between items-center w-full h-fit'>
            <div className='w-full'>
                <h1 className='text-2xl font-black'>My Tasks</h1>
                <h3 className='text-[#4F7471]'>Manage all your tasks in one place</h3>
            </div>
            <div className='w-full hidden md:flex flex-row justify-end items-center gap-[2rem]'>
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
                
                <div className='flex flex-row justify-center items-center border-l border-r border-[#B9C7C6] px-[1rem] select-none gap-[1rem]'>
                    <Button 
                        disableRipple={true} 
                        isIconOnly={true} 
                        className='flex-shrink-0 bg-transparent text-[#4F7471]' 
                        onClick={handlePreferencesClick}
                    >
                        <SettingsOutlinedIcon draggable={false} />
                    </Button>

                    <Button 
                        disableRipple={true} 
                        isIconOnly={true} 
                        className='flex-shrink-0 bg-transparent text-[#4F7471]' 
                        onClick={handleResumeClick}
                    >
                        <AssignmentIndIcon draggable={false} />
                    </Button>
                </div>
                
                <AccountCircleIcon className='bg-[#DCE3E3] border-[#B9C7C6] rounded-full w-[80px] h-[80px] select-none'/>
            </div>
        </div>
    );
}

export default DashBar;
