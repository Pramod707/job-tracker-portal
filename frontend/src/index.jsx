import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
<<<<<<< Updated upstream
import Navbar from './components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
=======
import {NextUIProvider} from "@nextui-org/react";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
<<<<<<< Updated upstream
      <BrowserRouter>
        <div className="bg-primary min-h-screen px-[4rem]">
          <Navbar />
          <App />
        </div>
      </BrowserRouter>
=======
      <div className="bg-primary min-h-screen">
        {/* <Navbar /> */}
        <App />
      </div>
>>>>>>> Stashed changes
    </NextUIProvider>
  </React.StrictMode>
);
