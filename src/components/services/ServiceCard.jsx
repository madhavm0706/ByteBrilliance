import React from "react";

import {AiOutlineArrowRight} from "react-icons/ai";
import "./Services.css"

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
     <div className="service-card">
    <div className="image-container">
      <img src={imageSrc} alt="Service" />
    </div>
    <div className="content-container">
      <h3 className="title">{title}</h3>
      <p>{description}</p>
      <div className="arrow-icon"><AiOutlineArrowRight/></div>
    </div>
  </div>
  );
};

export default ServiceCard;