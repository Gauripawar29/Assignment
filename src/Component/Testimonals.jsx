import React from 'react'
import'./Testimonal.css'

const Testimonals = () => {
  return (
    <>
    <div className="testimonial-container">
      <h1 className="main-title">What Our Pharma Partners Say</h1>
      <p className="subtitle">Driving Transformations, One Brand at a Time</p>
      
      <div className="testimonial-card">
        <div className="testimonial-left">
          <div className="image-container">
            <img src="/Assests/Testimonal.jpeg" alt="Partner" className="partner-image" />
            <div className="play-button">
              <div className="play-icon"></div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-right">
          <div className="profile">
            <img src="/Assests/Profile.png" alt="Tabish Khan" className="profile-pic" />
            <h3 className="profile-name">Tabish khan</h3>
            <img src="/Assests/Symbol.png" alt="symbol-img" className="symbol"></img>
          </div>
          <p className="testimonial-text">
            Osumare's expertise in pharma <br/>marketing is unparalleled. Their<br/> strategies helped us navigate <br/>complex regulations while driving<br/> remarkable growth.
          </p>
        </div>
      </div>
      
      <div className="navigation">
        <button className="nav-button prev">←</button>
        <button className="nav-button next">→</button>
      </div>
      </div>

    </>
  )
}

export default Testimonals