import React from 'react';
import PrefSidebar from './PrefSidebar';
import { PrefProvider } from './PrefContext';

const App = () => {
  return (
    <PrefProvider>
      <PrefSidebar />
    </PrefProvider>
  );
}

export default App;
