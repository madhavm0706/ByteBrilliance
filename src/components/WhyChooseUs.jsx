import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import head from '../components/whychooseus/head.jpg'
import img1 from '../components/whychooseus/first.png'
import img2 from '../components/whychooseus/second.png'
import img3 from '../components/whychooseus/third.png'
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
function WhyChooseUs() {
  const slides = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className=" whychooseus w-full " id="choose">


        <div id="page">


          <div class="relative container w-full mx-auto  items-center justify-center">
            <img src={head} alt="Image" class="w-full h-[300px] md:h-[350px] lg:h-[700px]" />
            <motion.div
            initial={{x:0, opacity: 0}}
            whileInView={{x:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:2.0}}
            >
            <div class="absolute top-0 left-0 w-full mx-auto h-[300px] flex items-center justify-center">
              <p style={{ "fontFamily": "JejuGothic" }} class="w-2/3 md:w-4/5 mx-auto text-center text-white headtext1  ">WHY CHOOSE US?</p>

            </div>
            </motion.div>
            
            <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:1.0}}
            >
            
            <p class="text-center text-white headtext2">The pragmatic choice for your business success</p>
            </motion.div>
          </div>
          {/* <div class=" container w-full mx-auto  items-center justify-center">
                  <img src={head} alt="Image" class="mx-10 h-[400px]" />
                  <p class="text-center text-white headtext1 ">WHY CHOOSE US?</p>
                  <br></br>
                  <p class="text-center text-white headtext2">The pragmatic choice for your business success</p>

                </div> */}
        </div>
      </div>

      <div className='max-w-[1400px] object-cover h-[350px] sm:h-[400px] md:h-[500px] lg:h-[800px] w-full m-auto py-16 px-4 relative group'>

        {currentIndex == 2 ?

          <>
            <Link 
              activeClass='slink' to="contactus" spy={true} smooth={true} offset={-130} >
              <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className='w-full h-full object-cover rounded-2xl bg-center bg-cover duration-500'
            ></div>
            </Link>
            
          </>
          :
          <>
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className='w-full h-full object-cover rounded-2xl bg-center bg-cover duration-500'
            ></div>
          </>}

        {/* Left Arrow */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;