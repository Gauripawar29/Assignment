import React from 'react';
import './Enquiries.css'

const data = [
  {
    icon: '/Assests/icon1.png',
    title: 'Call-to-Action Optimization',
    description: 'Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.'
  },
  {
    icon: '/Assests/icon2.png',
    title: 'Landing Page Efficiency',
    description: 'Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.'
  },
  {
    icon:'/Assests/icon3.png',
    title: 'Social Proof Utilization',
    description: 'Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.'
  },
  {
    icon:'/Assests/icon4.png',
    title: 'Mobile-Friendly Experience',
    description: 'With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.'
  }
];

function Inquiries() {
  return (
    <>
     <div className="container-hoee">
        <div className="property-section">
          <div className="property-header">
            <h2>Driving Property Inquiries to Conversions</h2>
            <p className="subtitle">
              Streamlined Strategies for Real Estate Success
            </p>
          </div>
          <div className="property-body">
            <div className="property-image">
              <img src="/Assests/inquires.png " alt="inquires" />
            </div>
            <div className="property-content">
              <h3>Optimized Path to Property Purchase</h3>
              <p className="description">
                In the dynamic realm of real estate, the journey from a property
                inquiry to a successful conversion demands a well-crafted
                approach. At Osumare, we specialize in guiding potential buyers
                through this journey seamlessly, maximizing
                inquiries-turned-conversions with expert strategies.
              </p>
              <button className="but1">Get started</button>
            </div>
          </div>
        </div>
      </div>
    <div className='head'>
        <h1>Driving Property Inquiries to Conversions</h1>
      </div>
    <div className="container-Enq">
      <div className="row">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="col">
            <img src={item.icon} alt={item.title} />
            <h3 style={{fontSize:"24px"}}>{item.title}</h3>
            <p  style={{fontSize:"24px"}}>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="row">
        {data.slice(2).map((item, index) => (
          <div key={index + 2} className="col">
            <img src={item.icon} alt={item.title} />
            <h3  style={{fontSize:"24px"}}>{item.title}</h3>
            <p  style={{fontSize:"24px"}}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
  


export default Inquiries;