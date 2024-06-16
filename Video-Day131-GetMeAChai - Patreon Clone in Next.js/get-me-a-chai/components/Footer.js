import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-purple-950 text-white flex flex-col md:flex-row items-center h-16'>
      <div className="logo font-bold px-3 w-1/4 text-xl">
        GetMeAChai
      </div>
      <p className='text-center w-3/4 flex justify-center items-center'>
        Copyright &copy; Get me a Chai - All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
