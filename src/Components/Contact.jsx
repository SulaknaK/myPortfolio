import React from 'react';
import  '../Styles/Contact.css';
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "78e2dafa-738b-454e-a213-35d83d5cd3ae");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert("Form Submitted Successfully!")
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=""></img>
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currenntly searcing for job opppotunities in...  You can Contact me in</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>sulaknak@vt.edu</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>7034452900</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>VA, USA</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'> 
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'></input>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your Email' name='email'></input>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
