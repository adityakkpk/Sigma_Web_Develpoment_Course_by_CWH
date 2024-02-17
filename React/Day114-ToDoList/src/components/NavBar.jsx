import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between bg-[#3d5fe6] text-white py-2 px-8'>
        <div className="logo">
            <span className='cursor-pointer font-bold text-xl'>Todo</span>
        </div>
        <ul className="flex w-[200px] gap-5 justify-between px-2">
            <li className='cursor-pointer  hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default NavBar
