import React from 'react'
import DashBar from './DashBar'
import Home from './Home/Home'
import JobTracking from './JobTracking/JobTracking'
import MyTasks from './MyTasks/MyTasks'
import Notifications from './Notifications/Notifications'
import Analytics from './Analytics/Analytics'

import { useSidebar } from '../contexts/SidebarContext';

const Dashboard = () => {
  const { activeTab } = useSidebar();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'jobtracking':
        return <JobTracking />;
      case 'mytasks':
        return <MyTasks />;
      case 'notifications':
        return <Notifications />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Home />;
    }
  };



  return (
    <div className='flex flex-col p-[1rem] gap-[2rem] bg-white rounded-md w-full h-full border-[#EDF1F1] border mr-[1rem] my-[0.5rem]'>
      <DashBar />
      {renderContent()}
    </div>
  )
}

export default Dashboard