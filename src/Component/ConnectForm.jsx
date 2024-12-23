import React from 'react'
import './ConnectForm.css'

const ConnectForm = () => {
  return (
    <>
    <div className="contact-container">
      <h1>Connect with Our Digital Marketing Experts</h1>
      <p className="subtitle">Reach Out for Tailored Strategies and Results-Driven Solutions.</p>
      <p className="subtitle">Let's Elevate Your Online Presence Together</p>
      
      <div className="form-card">
        <div className="form-layout">
          <div className="form-left">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Enter your Number" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your Total No of Vehicles" />
            </div>
          </div>
          <div className="form-right">
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter your Message" rows="8"></textarea>
            </div>
          </div>
        </div>
        <button className="submit-button">Get started</button>
      </div>
    </div>
    
    </>
  )
}

export default ConnectForm