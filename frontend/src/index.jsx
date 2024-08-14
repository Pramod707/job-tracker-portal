import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <div className="bg-primary min-h-screen px-[4rem]">
          <Navbar />
          <App />
        </div>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
