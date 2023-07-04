import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/6.jpg";
import img3 from "../assets/7.jpg";
import img2 from "../assets/8.jpg";
import img4 from "../assets/9.jpg";
import img5 from "../assets/11.jpg";
import img6 from "../assets/12.jpg";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto mt-20  w-full relative  " >

      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={false}
        showStatus={false}
        showIndicators={true}
        autoFocus={true}
        showArrows={false}
        showThumbs={false}
        interval={2000}
        selectedItem={currentIndex}
        onChange={handleCarouselChange}
        className=""

      >

         <div className="w-4/5 h-[40vh]  lg:h-[75vh]  mx-auto">
          <div className=" w-full  h-[35vh] lg:h-[70vh]   relative">
            <p style={{ "fontFamily": "JejuGothic" }} className="text-right  absolute w-2/3 md:w-1/2 bottom-0 right-0 text-white carousel-text p-2 text-[35px] md:text-[55px] lg:text-[75px] mr-[-20px] sm:mr-[-30px] md:mr-[-50px] lg:mr-[-80px] xl:mr-[-100px]" >
              Spreading Confidence & Joy
            </p>

            <img className="object-fit w-full h-full" src={img1} />
          </div>

        </div> 
          <div className="w-4/5 h-[40vh]  lg:h-[75vh]  mx-auto">
          <div className=" w-full  h-[35vh] lg:h-[70vh]   relative">
            <p style={{ "fontFamily": "JejuGothic" }} className="text-right  absolute w-2/3 md:w-1/2 bottom-0 right-0 text-white carousel-text p-2 text-[35px] md:text-[55px] lg:text-[75px] mr-[-20px] sm:mr-[-30px] md:mr-[-50px] lg:mr-[-80px] xl:mr-[-100px]" >
            Support For Life
            </p>

            <img className="object-fit w-full h-full" src={img2} />
          </div>

        </div>
        <div className="w-4/5 h-[40vh]  lg:h-[75vh]  mx-auto">
          <div className=" w-full  h-[35vh] lg:h-[70vh]   relative">
            <p style={{ "fontFamily": "JejuGothic" }} className="text-right  absolute w-2/3 md:w-1/2 bottom-0 right-0 text-white carousel-text p-2 text-[35px] md:text-[55px] lg:text-[75px] mr-[-20px] sm:mr-[-30px] md:mr-[-50px] lg:mr-[-80px] xl:mr-[-100px]" >
            Embracing The Youth
            </p>

            <img className="object-fit w-full h-full" src={img3} />
          </div>

        </div>
        <div className="w-4/5 h-[40vh]  lg:h-[75vh]  mx-auto">
          <div className=" w-full  h-[35vh] lg:h-[70vh]   relative">
            <p style={{ "fontFamily": "JejuGothic" }} className="text-right  absolute w-2/3 md:w-1/2 bottom-0 right-0 text-white carousel-text p-2 text-[35px] md:text-[55px] lg:text-[75px] mr-[-20px] sm:mr-[-30px] md:mr-[-50px] lg:mr-[-80px] xl:mr-[-100px]" >
            Support To Our Customers
            </p>

            <img className="object-fit w-full h-full" src={img4} />
          </div>

        </div>
        <div className="w-4/5 h-[40vh]  lg:h-[75vh]  mx-auto">
          <div className=" w-full  h-[35vh] lg:h-[70vh]   relative">
            <p style={{ "fontFamily": "JejuGothic" }} className="text-right  absolute w-2/3 md:w-1/2 bottom-0 right-0 text-white carousel-text p-2 text-[35px] md:text-[55px] lg:text-[75px] mr-[-20px] sm:mr-[-30px] md:mr-[-50px] lg:mr-[-80px] xl:mr-[-100px]" >
            Latest Technologies
            </p>

            <img className="object-fit w-full h-full" src={img5} />
          </div>

        </div>
        <div className="w-4/5 h-[40vh]  lg:h-[75vh]  mx-auto">
          <div className=" w-full  h-[35vh] lg:h-[70vh]   relative">
            <p style={{ "fontFamily": "JejuGothic" }} className="text-right  absolute w-2/3 md:w-1/2 bottom-0 right-0 text-white carousel-text p-2 text-[35px] md:text-[55px] lg:text-[75px] mr-[-20px] sm:mr-[-30px] md:mr-[-50px] lg:mr-[-80px] xl:mr-[-100px]" >
            Developing Futures
            </p>

            <img className="object-fit w-full h-full" src={img6} />
          </div>

        </div> 
        
         
        










      </Carousel>
    </div>

  );
};

export default Services;
