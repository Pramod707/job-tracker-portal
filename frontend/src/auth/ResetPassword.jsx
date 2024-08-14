import React from 'react'

const ResetPassword = () => {
  return (
    <div className='p-1 bg-[#EDF1F1] rounded-md flex flex-col justify-center items-center'>
        <div className="bg-white p-[2rem] flex flex-col justify-center items-center rounded-xl gap-[2rem]">
            <div className='flex flex-col justify-center items-center gap-[1rem] text-center border-b pb-[2rem] border-dotted border-[#adadad] w-full'>
                <h1 className='text-2xl font-bold'>Reset Password</h1>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#F4F6F6] p-[2rem] rounded-md gap-[2rem] text-center'>
                <img src="/mini_icons/successful.svg" alt="success" draggable={false} />
                <p>Your password has been reset. Go back to login page and login with your new password.</p>
            </div>
        </div>
        <div className='py-[1rem]'>
            <a href="##" className='text-[#0037FF] font-semibold'>Back to Login</a>
        </div>
    </div>
  )
}

export default ResetPassword