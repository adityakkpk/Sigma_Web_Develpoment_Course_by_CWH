import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-800 flex justify-center items-center gap-5 py-4 text-white w-full'>
        <div className=''>
            <div className="font-bold  text-2xl">
                <span className='text-green-600'>&lt;</span>
                <span>Password</span>
                <span className='text-green-600'>Manager/&gt;</span>
            </div>
        </div>
        <div className=''>
            Created with ❤️ by Aditya Kumar Kushwaha.
        </div>
    </div>
  )
}

export default Footer
