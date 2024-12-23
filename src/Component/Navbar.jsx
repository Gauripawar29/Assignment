import React from 'react'
import'./Navbar.css';
const Navbar = () => {
  return (
    <>
     <nav>
      <div className="container-Home">
        <div className="logo">
          <img src="/Assests/Osamare_logo.png" alt="Logo" />
        </div>
        <button className="contact-us-button">Contact us</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar