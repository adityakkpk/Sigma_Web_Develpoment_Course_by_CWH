import React from 'react'

function Navbar() {
  return (
    <nav className='bg-slate-800 text-white fixed top-0 w-full z-10'>
        <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
            <div className="font-bold  text-2xl">
                <span className='text-green-600'>&lt;</span>
                <span>Password</span>
                <span className='text-green-600'>Manager/&gt;</span>
            </div>
            <div className='flex gap-1 border bg-green-600 hover:bg-green-400 cursor-pointer rounded px-2 py-1'>
                <span className='font-bold'>Fork</span>
                <img className='invert w-5' src="/git-fork.svg" alt="git-fork" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
