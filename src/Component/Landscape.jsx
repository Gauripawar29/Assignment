import React from 'react'
import './Land.css'

const Landscape = () => {
  return (
    <>
         <div className="container-Land">
      <header>
        <h1>Navigating Real Estate's Digital Landscape</h1>
        <p>Insights for Real Estate Marketing Advantage</p>
      </header>
      
      <div className="content-wrapper">
        <div className="left-panel">
          <div className="card">
            <img src="/Assests/bard-fill.png" alt="" className='log'></img>
            <div className="text">
              <h3>Market Trends Analysis</h3>
              <p>Predictive insights to guide real estate strategies.</p>
            </div>
          </div>

          <div className="card">
          <img src="/Assests/flashlight-fill.png" alt="" className='log'></img>
            <div className="text">
              <h3>Targeted Buyer Persona</h3>
              <p>Understand and connect with your ideal property buyers.</p>
            </div>
          </div>

          <div className="card">
          <img src="/Assests/shield-check-fill.png" alt="" className='log'></img>
            <div className="text">
              <h3>Competitor Insights</h3>
              <p>Stand out in the property market with informed strategies.</p>
            </div>
          </div>

          <div className="card">
          <img src="/Assests/phone-find-fill.png" alt="" className='log'></img>
            <div className="text">
              <h3>Visual Content Appeal</h3>
              <p>Captivate buyers with appealing visuals and immersive experiences.</p>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="image-container">
            <img 
              src="/Assests/Landscape.jpeg" 
              alt="Real Estate Expert"
              className="expert-image"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landscape