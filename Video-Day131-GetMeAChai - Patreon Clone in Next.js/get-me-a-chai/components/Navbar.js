import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 text-white flex items-center justify-between h-16 px-3'>
      <div className="logo font-bold text-xl">
        GetMeAChai
      </div>
      <ul className='flex gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
