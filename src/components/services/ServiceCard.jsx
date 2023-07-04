import React from "react";

import {AiOutlineArrowRight} from "react-icons/ai";
import "./Services.css"

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
     <div className="service-card md:w-2/3   ">
    <div className="image-container w-4/5 mx-auto pt-4 pb-4">
      <img className="" src={imageSrc} alt="Service" />
    </div>
    <div className="content-container w-full bottom-0">
      <h3 className="title">{title}</h3>
      <br></br>
      <p className=" ">{description}</p>
      <div className="arrow-icon"><AiOutlineArrowRight/></div>
    </div>
  </div>
  );
};

export default ServiceCard;