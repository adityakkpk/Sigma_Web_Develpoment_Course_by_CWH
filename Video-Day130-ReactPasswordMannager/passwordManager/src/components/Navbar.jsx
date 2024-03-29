import React from 'react'

function Navbar() {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
            <div className="font-bold  text-2xl">
                <span className='text-green-600'>&lt;</span>
                <span>Password</span>
                <span className='text-green-600'>Manager/&gt;</span>
            </div>
            <ul>
                <li className='flex gap-4'>
                    <a href="/" className='hover:font-bold'>Home</a>
                    <a href="#" className='hover:font-bold'>About</a>
                    <a href="#" className='hover:font-bold'>Contacts</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
