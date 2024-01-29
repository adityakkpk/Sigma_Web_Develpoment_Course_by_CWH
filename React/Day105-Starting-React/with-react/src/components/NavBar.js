import React from 'react'
import Footer from './Footer'

const NavBar = ({props}) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default NavBar
