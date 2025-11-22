import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '20px 0',
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src="/logo.png" alt="JobCalc" style={{ height: '60px', width: 'auto' }} />
          </Link>
        </div>

        <div className="navbar-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>Features</a>
          <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>How it Works</a>
          <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>Reviews</a>
        </div>

        <a href="https://apps.apple.com/in/app/jobcalc-estimator/id6753925133" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}>
          Download App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
