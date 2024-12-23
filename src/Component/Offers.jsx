import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faMousePointer,
  faUsers,
  faFileAlt,
  faLaptopCode,
  faDatabase,
  faInfinity,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import './offer.css';

const Offers = () => {
  const services = [
    {
      icon: faChartLine,
      title: "Automotive SEO",
      description: "Drive Your Success with Automotive SEO, Increase Visibility and Outpace the Competition. Accelerate Your Business Growth Today"
    },
    {
      icon: faMousePointer,
      title: "PPC Precision",
      description: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
    },
    {
      icon: faUsers,
      title: "Social Acceleration",
      description: "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
    },
    {
      icon: faFileAlt,
      title: "Content Excellence",
      description: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
    },
    {
      icon: faLaptopCode,
      title: "Web Design",
      description: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
    },
    {
      icon: faDatabase,
      title: "Data-Driven Insights",
      description: "Leverage data to refine your strategies, making informed decisions that drive revenue growth."
    },
    {
      icon: faInfinity,
      title: "End-to-End Solutions",
      description: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
    },
    {
      icon: faVideo,
      title: "Video Marketing",
      description: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
    }
  ];

  return (
    <div className="service-container">
      <h1>Our Service Offerings</h1>
      <h2>Strategies that Drive Property Market Excellence</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <button className="get-started-btn">Get started</button>
    </div>
  );
};



export default Offers;
