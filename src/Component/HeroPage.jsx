import React from 'react'
import './Home.css'

const HeroPage = () => {
  return (
    <>
    <div className='bodyy'>
    <div className='container-fluid2' >
    <p style={{fontWeight:'500',fontSize:"48px"}}>Elevate <span style={{color:'#0078FF'}}>Real Estate Success</span> with <br/>Osumare's Digital Expertise</p>
    <p style={{fontSize:"24px"}}>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
    <button className="button1">Get Started</button>

    </div>
    <div className='header-Image'>
      <img src="/Assests/Header_image.png" alt="head" style={{height:"538px", width:"796px"}}></img>
    </div>
    </div>
    </>
  )
}
 
export default HeroPage