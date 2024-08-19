import React, { createContext, useContext, useState } from 'react';

const PrefContext = createContext();

export const PrefProvider = ({ children }) => {
  const [activePref, setActivePref] = useState('home');

  return (
    <PrefContext.Provider value={{ activePref, setActivePref }}>
      {children}
    </PrefContext.Provider>
  );
};

export const usePrefBar = () => useContext(PrefContext);
