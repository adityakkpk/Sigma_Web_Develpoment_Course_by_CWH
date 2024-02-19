import React, { memo } from 'react'

const NavBar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} NavBar.
      <button onClick={()=>{}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(NavBar)
