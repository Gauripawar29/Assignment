import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="container">
      <div className="footer-container">
        <div className="footer">
          <div className="footer-left">
            <img src="/Assests/Osamare_logo.png" alt="Logo" className="logo" />
            <p className="footer-description">
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>
            <div className="footer-address">
              <h4>Address</h4>
              <p>
                Survey No. 43, Pathare
                <br />
                Thube Nagar, Nagar Road,
                <br />
                Kharadi, Pune-14, Maharashtra, India.
              </p>
            </div>
            <div className="footer-contact">
              <h4>Contacts</h4>
              <p>
                <i className="fas fa-envelope"></i> hello@osumare.in
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +91 8459 8762 26
              </p>
            </div>
          </div>

          <div className="footer-center">
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Social</h4>
            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Osumare. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer