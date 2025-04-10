import React from 'react';
import '../Styles/Footer.css';
import footer_logo from '../assets/sula_logo.png';
import user_icon from '../assets/user_icon.svg';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top-left">
                <img src={footer_logo} alt=''></img>
                {/* <p>I am a frontend developer with...</p> */}
            </div>
            {/* <div className='footer-top-right'>
                <div className="footer-email-input">
                    <img src={user_icon} alt=''></img>
                    <input type='email' placeholder='Enter your email'></input>
                </div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-botom-left'> © 2025 Sulakna Karunaratna. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
             </div>
        </div>
    </div>
  )
}

export default Footer
