import React from 'react';
import '../Styles/Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_anim from '../assets/profile_anim.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDribbble } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile_anim} alt=''></img>
      <h1><span>Hi </span>I'm Sulakna Karunaratna</h1>
      <p>UI/UX Developer</p>
      <div className="social-icons">
        <div className='social-icon'>
        <a href="https://github.com/SulaknaK" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
        <hr></hr>
        <div className='social-icon'>
        <a href="https://www.linkedin.com/in/sulaknak/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        </div>
        <hr></hr>
        <div className='social-icon'>
        <a href="https://dribbble.com/__S_" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
        </div>
      </div>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className='hero-resume'> <a href="/resume.pdf" download="Sulakna_Karunaratna_Resume.pdf"> My resume </a></div>
      </div>
    </div>
  )
}

export default Hero
