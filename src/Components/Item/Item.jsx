import React from 'react'
import '../Item/Item.css'

const Item = (props) => {
    return (
        <div className='product-page'>
          <img src={props.image} alt="product image"/>
          <h4>{props.name}</h4>
        </div>
      )
    }

export default Item
