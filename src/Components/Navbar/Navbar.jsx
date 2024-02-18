import React, { useState, useEffect } from 'react'
import './Navbar.css'
import ltd from '../Assets/ltd.png'
import menuBar from '../Assets/menuBar.png'
import back from '../Assets/back.png'
import {showSideBar, hideSideBar} from '../Assets/Navbar'
import { Link } from 'react-router-dom'
import phone from '../Assets/phone.png'



const Navbar = () => {
      const [menu, setMenu] = useState('shop')
      
      useEffect(() => {
        const handleScroll = () => {
          const navBarStick = document.querySelector('.navbar');
          if (navBarStick) {
            navBarStick.classList.toggle('sticky', window.scrollY > 0);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

     
  return (
    <div className='navbar' >
      <div className='navbar-logo'>
        <div onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'><img src={ltd} alt="logo" /></Link></div>
      </div>
      
      <ul className="nav-menu">
        <li className='hide-display' onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li className='hide-display' onClick={()=>{setMenu('products')}}><Link style={{textDecoration: 'none'}} to='/products'>Products</Link>{menu==='products'?<hr/>:<></>}</li>
        <li className='hide-display' onClick={()=>{setMenu('contact')}}><Link style={{textDecoration: 'none'}} to='/contact'>Contact</Link>{menu==='contact'?<hr/>:<></>}</li>
        <li className='menu-bar' onClick= {showSideBar}><img  src={menuBar} alt="#" /></li>
      </ul>
      <ul className="sidebar">
        <li className='menu-icon' onClick= {hideSideBar}><img   src={back} alt="#" /></li>
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link></li>
        <li onClick={()=>{setMenu('products')}}><Link style={{textDecoration: 'none'}} to='/products'>Products</Link></li>
        <li onClick={()=>{setMenu('contact')}}><Link style={{textDecoration: 'none'}} to='/contact'>Contact</Link></li>
        
      </ul>
      
    </div>
  )
}

export default Navbar
