import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <div className={`header ${mobileMenuOpen ? 'mobile-active' : ''}`}>
      <div className='burhan'>
        <Link to="/" onClick={closeMenu}>
          <h2>Burhan ud din</h2>
          <h4>Grow Digitally</h4>
        </Link>
      </div>
      
      <div className='mid-header'>
        <Link to="/skills" onClick={closeMenu}><h4>Skills</h4></Link>
        <Link to="/services" onClick={closeMenu}><h4>Services</h4></Link>
        <Link to="/projects" onClick={closeMenu}><h4>Projects</h4></Link>
        <Link to="/about" onClick={closeMenu}><h4>About</h4></Link>
      </div>
      
      <div className='contact'>
        <Link to="/contact" onClick={closeMenu}><h4>Contact</h4></Link>
      </div>
      
      <button 
        className='mobile-menu-button' 
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
    </div>
  )
}