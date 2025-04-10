import React from 'react';
import '../Styles/About.css';
import theme_pattern from '../assets/theme_pattern.svg';
import profile_anim from '../assets/profile_anim.png';

function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt=''></img>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_anim} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
              <p>I am a UI/UX Developer with a background in Full-Stack Development and Business Analysis, bringing over 3 years of experience in designing intuitive, accessible, and responsive web applications. I specialize in crafting seamless user experiences using technologies like React, JavaScript, and modern CSS frameworks, while also understanding the backend logic that supports them.</p>
                  <h2>Academic Background</h2>
                  <p>I recently completed my M.S. in Computer Science at Virginia Tech, where I focused on UI/UX design, human-computer interaction, and full-stack development. My coursework and research deepened my knowledge of user-centered design, accessibility standards, and prototyping techniques.</p>

                  <h2>What Sets Me Apart</h2>
                  <p>My foundation in Business Analysis enhances my ability to translate user needs into thoughtful design decisions. I approach design with a strategic mindset—balancing aesthetics, functionality, and performance. I'm skilled in tools like Figma, Hotjar, and Google Analytics, which I use to iterate based on real user behavior. I thrive in collaborative environments and am always exploring new ways to create engaging, user-focused digital experiences.</p>

                {/* <p>I am a Full-Stack Developer with a background in Business Analysis and over 3 years of experience in web development. I specialize in building user-friendly, scalable applications and have worked with technologies like React, Node.js, Java Spring Boot.</p>
                <h2>Academic Background</h2>
                <p>I recently completed my M.S. in Computer Science at Virginia Tech, where I deepened my expertise in UI/UX design, full-stack development and prompt engineering.</p>
                <h2>What Sets Me Apart</h2>
                <p>In addition to my technical skills, my experience as a Business Analyst has sharpened my problem-solving and strategic thinking abilities. I connect technical solutions with user needs and excel in teamwork to drive innovation. I’m always eager to learn new technologies and refine my skills to build impactful, user-centric solutions.</p> */}
              </div>
              {/* <div className='about-skills'>
                <div className='about-skill'><p>React</p><hr style={{width:"50%"}}></hr></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}}></hr></div>
                <div className='about-skill'><p>HTML</p><hr style={{width:"70%"}}></hr></div>
                <div className='about-skill'><p>CSS & TailwindCSS</p><hr style={{width:"60%"}}></hr></div>
                <div className='about-skill'><p>MongoDB & SQL</p><hr style={{width:"50%"}}></hr></div>
                <div className='about-skill'><p>NodeJS & Java</p><hr style={{width:"50%"}}></hr></div>
              </div> */}
            </div>
        </div>
        {/* <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr></hr>
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr></hr>
          <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div> */}
      
    </div>
  )
}

export default About
