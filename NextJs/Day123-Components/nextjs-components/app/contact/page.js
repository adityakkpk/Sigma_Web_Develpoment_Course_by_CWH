import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to Contact Page");`}
      </Script>
      I am Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact us - Facebook - Connect with the world",
  description: "This is contact Facebook and we can connect with the world with facebook",
};