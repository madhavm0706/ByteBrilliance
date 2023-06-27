import React, { useEffect } from 'react';
import '../index.css';

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
    <div className='about-div'>
      <div className='about-div1'>
        <div className='about-subdiv'>
          <span className='about-subtext animate-text'>who <br /> are</span>
        </div>
        <span className='about-subspan animate-text'>we?</span>
      </div>
      <div className='about-div2'>
        Discover the story of ByteBrilliance, founded by tech enthusiasts Charandeep Kapoor and Khushi, who graduated from IIT Kanpur. Their background and expertise ensure that ByteBrilliance remains at the forefront of cutting-edge technology solutions. <br /><br />
        Discover the story of ByteBrilliance, founded by tech enthusiasts Charandeep Kapoor and Khushi, who graduated from IIT Kanpur. Their background and expertise ensure that ByteBrilliance remains at the forefront of cutting-edge technology solutions. Discover the story of ByteBrilliance, founded by tech enthusiasts Charandeep Kapoor and Khushi, who graduated from IIT Kanpur. Their background and expertise ensure that ByteBrilliance remains at the forefront of cutting-edge technology solutions. Discover the story of ByteBrilliance, founded by tech enthusiasts Charandeep Kapoor and Khushi, who graduated from IIT Kanpur. Their background and expertise ensure that ByteBrilliance remains at the forefront of cutting-edge technology solutions. <br /><br />
        Discover the story of ByteBrilliance, founded by tech enthusiasts Charandeep Kapoor and Khushi, who graduated from IIT Kanpur. Their background and expertise ensure that ByteBrilliance remains at the forefront of cutting-edge technology solutions.
      </div>
    </div>
  );
};

export default About;
