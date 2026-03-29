import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy-dark)', color: '#F8FAFC', padding: '60px 20px 20px 20px', marginTop: 'auto' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Brand Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img src="/assets/logo.jpeg" alt="MedVas Logo" style={{ height: '50px', width: '50px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ color: 'var(--accent-vibrant)', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '1px', lineHeight: '1.2' }}>MEDVAS</div>
              <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '2px' }}>ENTERPRISES</div>
            </div>
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Empowering medical professionals with high-precision instruments and essential healthcare supplies. Reliability, integrity, and swift distribution.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.2rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/products" style={linkStyle}>Our Catalog</Link></li>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.2rem' }}>Contact Us</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#94A3B8', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Phone size={20} color="var(--accent-vibrant)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>+91 123 456 7890</span>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Mail size={20} color="var(--accent-vibrant)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>contact@medvasenterprises.com</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <MapPin size={20} color="var(--accent-vibrant)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>123 Medical Equipment Park,<br />Healthcare District, City 400001</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#64748B', fontSize: '0.85rem', borderTop: '1px solid #1E293B', paddingTop: '20px' }}>
        &copy; {new Date().getFullYear()} MEDVAS ENTERPRISES. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#94A3B8',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  fontWeight: '500'
};

export default Footer;