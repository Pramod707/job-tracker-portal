import React from 'react';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-[4rem] py-[1rem] z-50'>
      <a href='##'>
        <img src="/logo.svg" alt="logo" draggable={false} />
      </a>
      <div className='flex flex-row justify-center items-center gap-[1rem]'>
        <a href='##' className='px-[1rem] py-[0.5rem]'>Login</a>
        <a 
          href='##'
          className='border border-[#DCE3E3] bg-white px-[1rem] py-[0.5rem] rounded-[8px] shadow-lg shadow-[#EAEFEF]'
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Navbar;
