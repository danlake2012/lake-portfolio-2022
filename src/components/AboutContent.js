import './AboutContent.css';

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
          🤚Hi, my name is Daniel Lake, I am a Jr Web Developer, 
          and I have been creating websites on my own for about 7 years. 
          💻It started using WordPress themes for a business I owned. 
          I then began to focus more of my own time on educating myself for website creation. 
          Just recently I graduated from Central Penn College where 
          I received an associates degree in application development. 
          💾Currently my platform of choice is React.js and Next.js 
          as it really streamlines production and the speed of loading websites. 
          I feel it is particularly 🛑important to hone ones skills and I will always look to do the same. 
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
  
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="true" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AboutContent;