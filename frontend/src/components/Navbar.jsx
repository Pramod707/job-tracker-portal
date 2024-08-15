import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-[4rem] py-[1rem] z-50'>
      <Link to='##'>
        <img src="/logo.svg" alt="logo" draggable={false} />
      </Link>
      <div className='flex flex-row justify-center items-center gap-[1rem]'>
        <Link to='/login' className='px-[1rem] py-[0.5rem] font-black'>Login</Link>
        <Link
          to='##'
          className='border border-[#DCE3E3] bg-white px-[1rem] py-[0.5rem] rounded-[8px] shadow-lg shadow-[#EAEFEF] font-black'
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
