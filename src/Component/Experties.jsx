import React from 'react'
import './experties.css'

  const data = [
    {
      icon: '/Assests/icon6.png',
      title: 'Effective CTAs',
      description: 'See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.'
    },
    {
      icon: '/Assests/icon7.png',
      title: 'Conversion-Optimized Landing Pages',
      description: 'Explore a case study where our landing page optimization increased property lead conversion rates by 30%'
    },
    {
      icon: '/Assests/icon8.png',
      title: 'Trust Building with Social Proof',
      description: 'Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project'
    },
    {
      icon: '/Assests/icon9.png',
      title: 'Mobile-First Success:',
      description: 'Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.'
    }
  ];
  
  function Experties() {
    return (
      <>
      <div className='head-exp'>
        <h1>Our Experties in Action</h1>
      </div>
      <div className="container-exp">
        {data.map((item, index) => (
          <div key={index} className="item">
            <img src={item.icon} alt={item.title} />
            <h3 style={{fontSize:"24px"}}>{item.title}</h3>
            <p style={{fontSize:"24px"}}>{item.description}</p>
          </div>
        ))}
      </div>
      </>
    );
  }
  

export default Experties