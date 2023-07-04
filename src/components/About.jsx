import React, { useEffect } from 'react';
import '../index.css';
import {motion} from 'framer-motion'
const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-text');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <div className='whoweare about-div mx-auto  w-4/5'>
    <div className="about-div1">
  <div className="about-subdiv pt-4">
  <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:1.0}}
            >
  <div class="lg:flex lg:justify-end">
    <p style={{"fontFamily":"JejuGothic"}} className="hidden lg:block lg:text-right  pl-10   ">Who <br></br>Are</p>
    <p style={{"fontFamily":"JejuGothic"}} className=" lg:hidden text-[30px] sm:text-[50px] text-center  text-center   ">Who Are</p>

    </div>
    </motion.div>

  </div>
  <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:1.0}}
            >
  <div className="text-center lg:text-right lg:w-[80%] ">
    <p style={{"fontFamily":"JejuGothic"}} className="text-[40px] lg:text-[100px] mt-[-10px] p-0">We?</p>
  </div>
  </motion.div>
</div>
<motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:1.0}}
            className='about-div2'>
        Founded by IIT Kanpur graduates, Khushi Gautam and Charandeep Kapoor, ByteBrilliance is your trusted partner for exceptional tech consultancy services. From captivating web development to seamless mobile experiences, we excel in crafting innovative solutions tailored to your business needs.<br></br><br></br>
        Beyond web and mobile, we lead in cloud computing, data analytics, and AI, leveraging the latest tech and industry best practices. Our unwavering commitment to excellence drives tangible results, as we understand your objectives and challenges, delivering customized strategies with meticulous attention to detail.<br></br><br></br>
        Choose ByteBrilliance for a highly skilled team dedicated to your success. We foster collaboration, build lasting relationships, and provide ongoing support in the ever-evolving tech landscape.<br></br><br></br>
        Unlock your business's digital excellence with ByteBrilliance today.
      </motion.div> 
     
    </div>
    
    <div className='w-4/5 mx-auto flex justify-center items-center h-full ' style={{"marginBottom":"100px"}}>
    <button class="aboutbtn">
      <span>Contact Us</span>
    </button>

  </div>
  </>
  );
};

export default About;
