import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from './service1.png'
import img2 from './service2.png'
import img3 from './service3.png'
import img4 from './service4.png'
import img5 from './service5.png'
import img6 from './service6.png'
import {AiOutlineArrowRight} from "react-icons/ai";


const ServicesSection = () => {
  const services = [
    {
      title: 'Machine Learning and AI',
      description: 'Cloud-based AI Platforms, Natural Language Processing...',
      imageSrc: img1
    },
    {
      title: 'Web Development',
      description: 'CMS, API, Web Security and Maintenance, SEO, Respons...',
      imageSrc: img2
    },
    {
      title: 'E-commerce Development',
      description: 'Magento, WP, Shopify, WIx and other services just to make yo...',
      imageSrc: img3
    },
    {
      title: 'Mobile App Development',
      description: 'Mobile App Strategy and Consultation, UI/UX design an...',
      imageSrc: img4
    },
    {
      title: 'AR/VR Development',
      description: 'AR/VR Hardware and Integration, Training and Simul...',
      imageSrc: img5
    },
    {
      title: 'Game Development',
      description: 'Game Concept and Design,  Art and Asset Creation, Developme...',
      imageSrc: img6
    }
  ];

  return (
    <>
      <div className="  services    w-full mx-auto">

        <h2 style={{"fontFamily":"MightyShadow"}} className='head text-center mt-[100px] mb-8 '>Services</h2>



        <div className="  services-section ">
          <div className="hidden md:grid mx-auto grid  grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center ">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
              />


            ))}
          </div>
          <div className='md:hidden w-full'>
            <div
              class="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
              <div
                class="flex flex-nowrap  justify-items-center items-center "
              >
                {services.map((service, index) => (
          
          <div className="service-card w-[300px]    ">
    <div className="image-container w-4/5 mx-auto pt-4 pb-4">
      <img className="" src={service.imageSrc} alt="Service" />
    </div>
    <div className="content-container w-full bottom-0">
      <h3 className="title md:mt-4 md:ml-4">{service.title}</h3>
      <br></br>
      <p className=" ">{service.description}</p>
      <div className="arrow-icon"><AiOutlineArrowRight/></div>
    </div>
  </div>


                ))}

              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default ServicesSection;