import React from 'react';
import img1 from './project1.png';
import img2 from './project2.png';
import img3 from './project3.png';
import img4 from './project4.png';
import img5 from './project5.png';
import './Portfolio.css';

import cimg1 from '../companies/first.png'
import cimg2 from '../companies/second.png'
import cimg3 from '../companies/third.png'
import cimg4 from '../companies/fourth.png'
import cimg5 from '../companies/fifth.png'
import cimg6 from '../companies/sixth.png'
import HorizontalScroll from '../WhyChooseUs';

const SIZE = '100%';

const IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const textname=["Magazine Design","Festival Theme Design","Maganize Design","Oye Mi Perro!!! Deck","Poster Design for a Theartre in USA"]

const CLIPS = [
  ['inset(0 0 15% 0)', 'inset(0 0 100% 0)'],
  ['inset(0 0 15% 0)', 'inset(0 0 100% 0)'],
  ['inset(0 0 15% 0)', 'inset(0 0 100% 0)'],
  ['inset(0 0 15% 0)', 'inset(0 0 100% 0)'],
  ['inset(0 0 100% 0)', 'inset(0 0 100% 0)'],
];

const Portfolio = () => {
  return (
    <>
      <div className='portfolio w-full mx-auto  '>
        <h1 className='portfolio-heading' style={{ "fontSize": "64px", "fontWeight": 400 }}>PORTFOLIO</h1>
        <div class="hidden md:flex w-full overflow-x-auto ">


          {IMAGES.map((src, index) => (
            <div class="w-1/5 ">

              <div className="relative imageclass  " style={{ '--clip-start': CLIPS[index][1], '--clip-end': CLIPS[index][0], "height": "auto" }} key={index}>

                <img className='opacity-50 transition-opacity duration-300 hover:opacity-100' src={src} alt={`Image ${index + 1}`} style={{ height: 'auto', width: SIZE }} />
                <div class="absolute bottom-0 pb-8 left-0 w-full bg-gradient-to-t from-black to-transparent bg-opacity-50 py-2">
                  <p style={{"fontFamily":"Hubballi"}} class="text-white text-center transform transition-transform duration-300  md:text-[20px] lg:text-[30px] imagetext">{textname[index]}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
        <div className=' md:hidden w-full'>
          <div
            class="flex flex-nowrap justify-items-center items-center overflow-x-scroll pb-10 hide-scroll-bar"
          >

            {IMAGES.map((src, index) => (
              <div class="inline-block px-1">
                <div
                  class="w-[400px] h-[500px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <div className="relative imageclass  " style={{ '--clip-start': CLIPS[index][1], '--clip-end': CLIPS[index][0], "height": "auto" }} key={index}>

                    <img className='opacity-50 transition-opacity duration-300 hover:opacity-100' src={src} alt={`Image ${index + 1}`} style={{ height: '500px', width: SIZE }} />
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent bg-opacity-50 py-2">
                      <p style={{"fontFamily":"Hubballi"}} class="text-white text-[20px] text-center transform transition-transform duration-300 imagetext">{textname[index]}</p>
                    </div>
                  </div>
                </div>
              </div>

            ))}







          </div>
        </div>

      </div>


      <div className=' mx-auto w-full  justify-center ' style={{ height: "150px", backgroundColor: " #C04BF233" }}>
        <div class="flex justify-center" style={{ paddingTop: "40px", paddingBottom: "100px", paddingLeft: "50px" }}>
          <div class="w-full md:w-4/5 ">
            <div class="flex items-center justify-between overflow-x-auto space-x-10">
              <div class="flex-shrink-0">
                <img src={cimg1} alt="Logo 1" class="h-20" />
              </div>
              <div class="flex-shrink-0">
                <img src={cimg2} alt="Logo 2" class="h-20" />
              </div>
              <div class="flex-shrink-0">
                <img src={cimg3} alt="Logo 3" class="h-20" />
              </div>
              <div class="flex-shrink-0">
                <img src={cimg4} alt="Logo 4" class="h-20" />
              </div>
              <div class="flex-shrink-0">
                <img src={cimg5} alt="Logo 5" class="h-20" />
              </div>
              <div class="flex-shrink-0">
                <img src={cimg6} alt="Logo 6" class="h-20" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Portfolio;
