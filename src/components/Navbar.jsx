import React, { useState, useEffect } from 'react'

function Navbar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleFunc() {
      if (window.scrollY > 120) setShow(true)
      else setShow(false)
    }
    window.addEventListener('scroll', () => handleFunc())
    return () => {
      window.removeEventListener('scroll', handleFunc())
    }
  }, [])

  return (
    <div
      className={`nav ${
        show && 'bg-black'
      } flex flex-row justify-between w-full fixed py-3 ease-in-out transition-all duration-500`}
    >
      <img
        className="object-contain h-7 ml-2"
        src="netflix-logo.png"
        alt="Netflix Logo"
      />
      <img
        className="object-contain h-7 mr-2"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Avatar"
      />
    </div>
  )
}

export default Navbar
