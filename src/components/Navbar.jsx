import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? 'var(--accent-vibrant)' : 'var(--navy-dark)',
    fontWeight: location.pathname === path ? '700' : '600',
    transition: 'color 0.2s ease',
    padding: '8px 12px',
    display: 'block'
  });

  return (
    <nav style={{ 
      backgroundColor: '#fff', borderBottom: '1px solid var(--border-color)',
      position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          <img src="/assets/logo.jpeg" alt="MedVas Logo" style={{ height: '50px', width: '50px', borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--navy-dark)', fontSize: '1.3rem', fontWeight: '800', letterSpacing: '1px', lineHeight: '1.2' }}>MEDVAS</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '2px' }}>ENTERPRISES</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={getLinkStyle('/')}>Home</Link>
          <Link to="/products" style={getLinkStyle('/products')}>Products</Link>
          <Link to="/about" style={getLinkStyle('/about')}>About Us</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-btn" style={{ display: 'none', cursor: 'pointer', color: 'var(--navy-dark)' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#fff', borderTop: '1px solid var(--border-color)', padding: '15px 20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/" style={getLinkStyle('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" style={getLinkStyle('/products')} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link to="/about" style={getLinkStyle('/about')} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;