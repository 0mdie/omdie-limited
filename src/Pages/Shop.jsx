import React from 'react'
import Hero from '../Components/Hero/Hero'
import './Shop.css'
import Products from './Products'
import Contact from './Contact'
import Auto from '../Components/Auto/Auto'

const Shop = () => {
  return (
    <div className='shop-hero'>
       <div className='heading'>
            <h1 >OMDIE LIMITED</h1>
        </div>
      <div>
          <span className="blank-space"></span>
      </div>
      <Auto/>
      <Hero/>
      <div>
          <span className="blank-space"></span>
      </div>
      <Products/>
      <div>
          <span className="blank-space-1"></span>
      </div>
     <Contact/> 
      
    </div>
  )
}

export default Shop
