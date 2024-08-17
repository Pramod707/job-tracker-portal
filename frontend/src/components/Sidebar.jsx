import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: '/mini_icons/home.svg' },
    { id: 'jobtracking', label: 'Job Tracking', icon: '/mini_icons/jobtracking.svg' },
    { id: 'mytasks', label: 'My Tasks', icon: '/mini_icons/mytasks.svg' },
    { id: 'notifications', label: 'Notifications', icon: '/mini_icons/notifications.svg' },
    { id: 'analytics', label: 'Analytics', icon: '/mini_icons/analytics.svg' },
  ];

  return (
    <div className='hidden px-4 py-[1rem] md:flex flex-col gap-[2rem]'>
      <Link to='/'>
        <img src="/logo.svg" alt="logo" draggable={false} />
      </Link>

      <div className="w-[256px] flex flex-col gap-[1rem]">
        {menuItems.map(item => (
          <Button
            key={item.id}
            auto
            light
            onPress={() => setActiveTab(item.id)}
            className={`flex flex-row justify-start items-center gap-[0.5rem] px-[1rem] bg-transparent py-[0.5rem] rounded-md transition-all ${
              activeTab === item.id ? 'bg-white shadow-sm' : 'hover:bg-[#ececec] text-[#4F7471]'
            }`}
          >
            <img src={item.icon} alt={item.label} />
            <p className='font-black'>{item.label}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
