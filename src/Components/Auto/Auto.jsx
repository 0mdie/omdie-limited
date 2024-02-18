import React from 'react'
import './Auto.css'
import products from '../Assets/products'
import Item from '../Item/Item'

const Auto = () => {
  return (
    <div className='carousel-item'>
        <div className='slider-products'>
        {products.map((item, i) => {
          return <Item key= {i} name= {item.name} image={item.image}/>
        })}
      </div>

    </div>
  )
}

export default Auto
