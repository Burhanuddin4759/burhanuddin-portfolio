import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      document.querySelector('.content').style.transform = `translateY(${headerHeight + 50}px)`;
    } else {
      document.querySelector('.content').style.transform = 'translateY(0)';
    }
  }, [mobileMenuOpen]);

  return (
    <div className={`header ${mobileMenuOpen ? 'mobile-active' : ''}`} ref={headerRef}>
      <div className='burhan'>
        <Link to="/" onClick={closeMenu}>
          <h2>Burhan ud din</h2>
          <h4>Enhance Digital Presence</h4>
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
  );
};