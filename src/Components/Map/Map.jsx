import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className="location">
        <h3>Our Location</h3>
        <div className='google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7826299582125!2d36.833235075024575!3d-1.305525735647554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110596cd50a5%3A0xa1de6e6188950327!2s56%20Dar%20Es%20Salaam%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1708118139900!5m2!1sen!2ske" width="1150" height="650"  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div><br />
        <h4>Business Hours</h4><br />
        <div className='open-hours'>
            <p>Weekdays: Open 8:00am - 5:00pm</p>
            <p>Weekends: Open 8:00am - 5:00pm</p>
        </div>

    </div>
    
  )
}

export default Map
