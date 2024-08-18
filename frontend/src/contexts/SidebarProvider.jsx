import React from 'react';
import Dashboard from './Dashboard';
import { SidebarProvider } from '../contexts/SidebarContext';

const App = () => {
  return (
    <SidebarProvider>
      <Dashboard />
    </SidebarProvider>
  );
}

export default App;
