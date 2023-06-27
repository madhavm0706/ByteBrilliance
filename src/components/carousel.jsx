import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/banner1.png";
import img3 from "../assets/banner3.png";
import img2 from "../assets/banner2.png";
import img4 from "../assets/banner4.png";
import img5 from "../assets/banner5.png";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    window.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={false}
        showStatus={false}
        showIndicators={false}
        autoFocus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
        selectedItem={currentIndex}
        onChange={handleCarouselChange}
      >
        <div>
          <img className="carousel-img" src={img1} alt="Item1" />
        </div>
        <div>
          <img className="carousel-img" src={img2} alt="Item2" />
        </div>
        <div>
          <img className="carousel-img" src={img3} alt="Item3" />
        </div>
        <div>
          <img className="carousel-img" src={img4} alt="Item4" />
        </div>
        <div>
          <img className="carousel-img" src={img5} alt="Item5" />
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
