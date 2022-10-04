import React from 'react';
import './FooterStyles.css';
import { FcHome, FcPhone } from 'react-icons/fc';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';
const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4 className='icon-1'> <FcHome size='2rem'/>Our Info</h4>
            <ul>
              <li><p>15 Crestview Dr</p></li>
              <li><p>Elizabethtown, PA 17022</p></li>
              <li></li>
              <li><p>America!</p></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4> <FcPhone size='2rem' />Reach Out</h4>
            <ul>
              <li><p>+(717) 454-8385</p></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4> <HiOutlineMailOpen size='2rem'/> Send Message</h4>
            <ul>
              <li><a href="mailto:danlake2012@gmail.com">Email Me</a></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <div className='github'>
                <a href='https://github.com/danlake2012'>
                  <FiGithub color='white' size='2rem' />
                </a>
              </div>
              <div className='linkedin'>
                <a href='https://www.linkedin.com/in/daniel-lake-iii/'>
                  <FiLinkedin color='white' size='2rem'/>
                </a>
              </div>
              <div className='youtube'>
                <a href='https://youtube.com'>
                <FiYoutube color='white' size='2rem' />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer