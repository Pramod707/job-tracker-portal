import React from 'react'
import { Button } from '@nextui-org/react';
import { usePrefBar } from './PrefContext';

const PrefSidebar = () => {
    const { activePref, setActivePref } = usePrefBar();

    const menuItems = [
        { id: 'account', label: 'Account'},
        { id: 'notifications', label: 'Notifications'},
        { id: 'display', label: 'Display'},
        { id: 'security', label: 'Security'},
    ];
  return (
    <div className='hidden px-4 py-[1rem] md:flex flex-col gap-[2rem] border-r'>

      <div className="w-[256px] flex flex-col gap-[0.5rem]">
        {menuItems.map(item => (
          <Button
            key={item.id}
            auto
            light
            onPress={() => setActivePref(item.id)}
            className={`flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] bg-transparent py-[0.5rem] transition-all ${
              activePref === item.id ? 'bg-[#F4F6F6]' : 'hover:bg-[#ececec] text-[#4F7471]'
            }`}
          >
            <p className='font-black'>{item.label}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default PrefSidebar