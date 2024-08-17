import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <SidebarContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
