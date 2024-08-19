import React from 'react';
import PrefSidebar from './PrefSidebar';
import Account from './Tabs/Account';
import NotificationsSection from './Tabs/NotificationsSection';
import Display from './Tabs/Display';
import Security from './Tabs/Security'
import { usePrefBar } from './PrefContext';

const Preferences = () => {
  const { activePref } = usePrefBar();

  const renderContent = () => {
    switch (activePref) {
      case 'account':
        return <Account />;
      case 'notifications':
        return <NotificationsSection />;
      case 'display':
        return <Display />;
      case 'security':
        return <Security />
      default:
        return <Account />;
    }
  };

  return (
    <div className='w-full h-full border rounded-lg flex flex-row'>
      <PrefSidebar />
      <div className='p-[2rem]'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Preferences;
