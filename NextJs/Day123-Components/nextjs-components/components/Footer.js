import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-between px-2 bg-slate-700 text-white py-4' >
        <div className="text-center">Copyright @ Facebook | All rights reserved</div>
        <ul className="flex gap-2 text-sm">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
