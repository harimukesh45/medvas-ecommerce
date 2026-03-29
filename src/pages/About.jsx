import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>About <span className="text-accent">MedVas</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Bridging the gap between advanced medical technology and healthcare providers.</p>
      </div>

      {/* Split Content Section */}
      <div className="about-layout" style={{ display: 'flex', alignItems: 'center', gap: '40px', backgroundColor: 'var(--surface)', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        
        {/* Text Side (Transcribed Content) */}
        <div className="about-text" style={{ flex: '1', paddingRight: '20px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '30px', color: 'var(--text-main)' }}>
            At <strong>MedVas Enterprises</strong>, we are dedicated to bridging the gap between advanced medical technology and healthcare providers. Our mission is to empower medical professionals with high-precision instruments and essential healthcare supplies that meet the highest standards of safety and efficacy. We understand that in the medical profession, every detail matters. That is why we curate a comprehensive portfolio of surgical tools and medical equipment designed to enhance clinical outcomes and patient care. With a focus on reliability, integrity, and swift distribution, MedVas Enterprises is your trusted partner in the journey toward a healthier future.
          </p>
          <Link to="/products">
            <button className="btn-primary">View Our Catalog</button>
          </Link>
        </div>

        {/* Image/Logo Side */}
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '350px', 
            aspectRatio: '1/1', 
            borderRadius: '50%', 
            padding: '10px',
            background: 'linear-gradient(135deg, var(--accent-hover), var(--accent-vibrant))',
            boxShadow: '0 10px 25px rgba(184, 115, 84, 0.4)'
          }}>
            <img 
              src="/assets/logo.jpeg" 
              alt="MedVas Logo" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '5px solid #fff' }} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;