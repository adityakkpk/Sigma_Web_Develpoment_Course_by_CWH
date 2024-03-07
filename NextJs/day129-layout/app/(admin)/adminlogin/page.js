import React from 'react'
const page = () => {
  return (
    <div>
      Admin Login
      <p>Login as admine</p>
    </div>
  )
}

export default page

// Dynamic Meta data
export async function generateMetadata({ params }){
  return {
    title : 'Login Kar',
  }
}