import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; // Import Sidebar
import { NextUIProvider } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Define which routes should show the Navbar or Sidebar
  const authRoutes = ['/signup', '/login', '/otp', '/reset-password', '/signup/add-details', '/privacypolicy', '/terms&conditions'];
  const showNavbar = authRoutes.includes(location.pathname);
  const showSidebar = location.pathname === '/';

  return (
    <div className='w-full'>
      {showNavbar && <div className="bg-primary min-h-screen px-[4rem]"><Navbar /><App/></div>}
      {showSidebar && <div className='bg-primary min-h-screen flex-row flex w-full'><Sidebar /><App/></div>}
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
