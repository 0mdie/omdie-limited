import React from 'react'
import './Hero.css'
import hero1 from '../Assets/hero1.jpg'
import hero2 from '../Assets/hero2.jpg'

const Hero = () => {
  return (
    <div>
          <div className='hero'>
            <h3 className='hero-title'>
            Welcome to Omdie Hardware. Where Innovation Meets Reliability! <br/>
            Explore our cutting-edge hardware solutions designed for peak performance and dependability. <br/>
            At Omdie, we prioritize quality products, ensuring our they are made to last with meticulous attention to detail. <br/>
            Discover our commitment to our clients as we leverage the latest market trends and products. <br/>
            Our services and products seamlessly integrates into your lifestyle, providing unparalleled efficiency and reliability. <br/>
            </h3>
            <div className="landing-page">
              <div id='image-card' className='f-image'>
                  <img className='image-1' src={hero1} alt="" />
                  <h4>All Your Tools</h4>
              </div>
              <div id='image-card' className='s-image'>
                  <img className='image-2' src={hero2} alt="" />
                  <h4>We Got You</h4>
            </div>
            </div>
            </div>
          
          
        
    </div>
  )
}

export default Hero
