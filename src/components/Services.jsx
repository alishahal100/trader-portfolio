import React, { useState, useRef } from 'react';
import { useIntersection } from 'react-use';

const Service = ({ title, description, icon, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);

  const intersection = useIntersection(serviceRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  if (intersection && intersection.intersectionRatio > 0.5 && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div
      ref={serviceRef}
      className={`${
        isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 ease-in-out`}
    >
    
      <div className="bg-white shadow-lg rounded-lg p-6 group  ">
        {image && <img src={image} alt={title} className="w-full h-[40vh] group-hover:scale-110 duration-300" />}
        <div className="text-2xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className='mt-20'>
    <h1 className='text-4xl text-center'>Our Services</h1>
    <div id='services' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Service
        title="Investment Strategy Consultation"
        description="Providing personalized investment strategies tailored to your financial goals and risk tolerance."
        icon={<i className="fas fa-chart-line"></i>}
        image="/investment-strategy.jpg"
      />
      <Service
        title="Portfolio Management"
        description="Managing your investment portfolio with expertise and diligence to optimize returns and minimize risks."
        icon={<i className="fas fa-briefcase"></i>}
        image="/portfolio-management.jpg"
      />
      <Service
        title="Financial Planning and Guidance"
        description="Offering comprehensive financial planning services and ongoing guidance to help you navigate the complexities of the market."
        icon={<i className="fas fa-hands-helping"></i>}
        image="/financial-planning.jpg"
      />
    </div>
  </div>
  
  );
};

export default Services;
