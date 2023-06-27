import React from 'react';
import img1 from './project1.png';
import img2 from './project2.png';
import img3 from './project3.png';
import img4 from './project4.png';
import img5 from './project5.png';
import './Portfolio.css';

const SIZE = '100%';

const IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const CLIPS = [
  ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
  ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
  ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
  ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
  ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
];

const Portfolio = () => {
  return (
    <>      <div>
    <h1 className='portfolio-heading'>PORTFOLIO</h1>
  </div>
    <div className="image-container">
      {IMAGES.map((src, index) => (
        <div className="image" style={{ '--clip-start': CLIPS[index][0], '--clip-end': CLIPS[index][1] }} key={index}>
          <div className="image-overlay">
            <p className="image-text">Byte Brilliance</p>
          </div>
          <img src={src} alt={`Image ${index + 1}`} style={{ height: '30rem', width: SIZE }} />
          <img src={src} alt={`Image ${index + 1}`} style={{ height: '30rem', width: SIZE }} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Portfolio;
