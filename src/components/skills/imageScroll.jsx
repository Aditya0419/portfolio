import React from 'react';
import './imageScroll.css'; // Import your CSS file
import css from './images/css.png';
import html from './images/html.png';
import javascript from './images/javascript.png';
import nodejs from './images/nodejs.png';
import react from './images/react.png';
import mongodb from './images/mongodb.png';
import mysql from './images/mysql.png';
import { useEffect } from 'react';

function ImageScroll() {

    let images=[
        html,css,javascript,nodejs,react,mongodb,mysql
    ];

  return (
    
      <div className="image-carousel-content marquee--7">
      {images.map((image, index) => (
          <img className="marquee__item" key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    
  );
};

export default ImageScroll;
