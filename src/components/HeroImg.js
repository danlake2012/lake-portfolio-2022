import './HeroImgStyles.css';

import React from 'react'
import IntroImg from '../assets/intro-bg3.jpg'
import { Link } from 'react-router-dom';
import resume from '../assets/Daniel-Lake-Resume-2022.rtf'
const HeroImg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='intro-image' src= { IntroImg } alt='Intro Img' />
        
    </div>
    <div className='content'>
    <p>Hi Im Dan...</p>
    <h1> A Web Developer</h1>
    <div>
        <a href={resume} download 
          className='btn'>Resume</a>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
    </div>
    </div>
  
  </div>;
};

export default HeroImg;