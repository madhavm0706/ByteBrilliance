import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from './service1.png'
import img2 from './service2.png'
import img3 from './service3.png'
import img4 from './service4.png'
import img5 from './service5.png'
import img6 from './service6.png'


const ServicesSection = () => {
  const services = [
    {
      title: 'Machine Learning and AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: img1
    },
    {
      title: 'Ecommerce Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: img2
    },
    {
      title: 'Mobile App Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: img3
    },
    {
      title: 'AI/VR Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: img4
    },
    {
      title: 'Game Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: img5
    },
    {
      title: 'ios Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: img6
    }
  ];

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
          
          
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;