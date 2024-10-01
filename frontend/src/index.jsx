import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar'; // Import Sidebar
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from './Components/Sidebar'
import { useLocation } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';

const Layout = () => {
  const location = useLocation();

  // Define which routes should show the Navbar or Sidebar
  const authRoutes = ['/signup', '/login', '/otp', '/forgot-password','/reset-password', '/signup/add-details', '/privacypolicy', '/terms&conditions'];
  const showNavbar = authRoutes.includes(location.pathname) || location.pathname.startsWith('/reset-password');
  const showSidebar = location.pathname === '/';

  return (
    <div className='w-full'>
      {showNavbar && <div className="bg-primary min-h-screen px-[4rem]"><Navbar /><App/></div>}
      {showSidebar && <div className='bg-primary min-h-screen flex-row flex w-full'><SidebarProvider><Sidebar /><App/></SidebarProvider></div>}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
