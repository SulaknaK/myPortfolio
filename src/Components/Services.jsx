import React from 'react';
import '../Styles/Services.css';
import theme_pattern from '../assets/theme_pattern.svg';
import Technology_Data from '../assets/technology_data';
import arrow_icon from '../assets/arrow_icon.svg'

function Services() {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='services-container'>
        {Technology_Data.map((technology , index)=>{
            return <div key={index} className='services-format'>
                <h3>{technology.t_no}</h3>
                <h2>{technology.t_name}</h2>
                <p><ul>
                    {technology.t_items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                </ul></p>
                {/* <div className='services-readmore'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt=""></img>
                </div> */}
            </div>
        })}
    </div>
  </div>
  )
}

export default Services
