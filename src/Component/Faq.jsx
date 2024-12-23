import React from 'react'
import "./Faq.css"

const Faq = () => {
  return (
    <div className="faq-container">
    <h2>Frequently Asked Questions</h2>
    <p>
      Pinpoint your audience with precision, ensuring your marketing efforts
      reach those most likely to engage with your brand.
    </p>
    <div className="faq-item">
      <details>
        <summary className="faq-title">
          3. How does Osumare measure campaign success?
          <span className="arrow"></span>
        </summary>
      </details>
      <details>
        <summary className="faq-title">
          3. How does Osumare measure campaign success?
          <span className="arrow"></span>
        </summary>
      </details>
      <details>
        <summary className="faq-title">
          3. How does Osumare measure campaign success?
          <span className="arrow"></span>
        </summary>
        <div className="faq-content">
          We believe in measurable results. Our data-driven approach means
          that every campaign's performance is tracked, analyzed, and refined
          for optimal outcomes. We provide regular reports that detail key
          metrics, giving you clear insights into how our strategies are
          driving growth for your brand.
        </div>
      </details>
    </div>
  </div>
);
};


export default Faq