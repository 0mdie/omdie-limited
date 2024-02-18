import React from 'react'
import { useState } from 'react';
import './Products.css'
import products from '../Components/Assets/products'
import Item from '../Components/Item/Item'


const Products = () => {

  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="product-landing">
      <h2>Products</h2>
      <div className='all-products'>
        {currentItems.map((item, i) => {
          return <Item key= {i} name= {item.name} image={item.image}/>
        })}
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === (index + 1) ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>

  )
}

export default Products
