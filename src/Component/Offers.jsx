import React from "react";
import "./offer.css";
import {
  FaChartBar,
  FaBullseye,
  FaUsers,
  FaPenNib,
  FaDesktop,
  FaChartLine,
  FaCogs,
  FaVideo,
} from "react-icons/fa";

const Offers = () => {
  const services = [
    {
      icon: <FaChartBar />,
      title: "Automotive SEO",
      description:
        "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today.",
    },
    {
      icon: <FaBullseye />,
      title: "PPC Precision",
      description:
        "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      icon: <FaUsers />,
      title: "Social Acceleration",
      description:
        "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    },
    {
      icon: <FaPenNib />,
      title: "Content Excellence",
      description:
        "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      icon: <FaDesktop />,
      title: "Web Design",
      description:
        "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Insights",
      description:
        "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      icon: <FaCogs />,
      title: "End-to-End Solutions",
      description:
        "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      icon: <FaVideo />,
      title: "Video Marketing",
      description:
        "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    },
  ];

  return (
    <div className="service-section">
      <h2 className="service-heading">Our Service Offerings</h2>
      <p className="service-subheading">
        Strategies that Drive Property Market Excellence
      </p>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="get-started-button">Get started</button>
    </div>
  );
};

export default Offers;
