import React from 'react'
import './Contact.css'
import call from '../Components/Assets/call.png'
import envelope from '../Components/Assets/envelope.png'
import Map from '../Components/Map/Map'


const Contact = () => {


  return (
    <div className='contact-info'>
      <h2>Contact Us</h2>
      <p>Get in touch for more information about our services and quotation. <br/>
        We'll be happy to assist you with whatever you need.
      </p>
      <div className='mail-call'>
        <img src={envelope} alt="mail" /><br />
        <a href="mailto:omdieltd@gmail.com">omdieltd@gmail.com</a><br />
        <img src={call} alt="phone" /><br />
        <a href ="tel:254705092401">+254 705 092 401</a>
      </div><br />
      <Map/>
            
    </div>
  )
}

export default Contact
