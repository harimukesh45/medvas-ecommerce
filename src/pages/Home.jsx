import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Slideshow Hero */}
      <div className="hero-slideshow" style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: 'var(--navy-dark)', overflow: 'hidden', marginBottom: '60px' }}>
        {products.map((product, index) => (
          <div key={product.id} style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: index === currentSlide ? 1 : 0, transition: 'opacity 1s ease-in-out',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/assets/banner.jpeg')`,
            backgroundSize: 'cover', backgroundPosition: 'center', padding: '0 20px'
          }}>
            <div className="container" style={{ textAlign: 'center', color: '#fff', zIndex: 2 }}>
              <span style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'var(--accent-vibrant)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '15px', letterSpacing: '1px' }}>
                PREMIUM EQUIPMENT
              </span>
              <h1 className="hero-title" style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '15px' }}>{product.name}</h1>
              <p className="hero-desc" style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 30px auto' }}>{product.description}</p>
              <Link to={`/products/${product.id}`}>
                <button className="btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Grid */}
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Precision <span className="text-accent">Supplies</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Top-tier kits for medical professionals.</p>
        </div>
        <div className="grid-auto">
          {featuredProducts.map(product => (
            <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '220px', backgroundColor: '#E2E8F0', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                 <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{product.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1 }}>{product.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '800', color: 'var(--navy-dark)', fontSize: '1.4rem' }}>₹{product.price}</span>
                <Link to={`/products/${product.id}`}><button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>View Kit</button></Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- NEW ADDITION: View Catalog Button --- */}
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>
          <Link to="/products">
            <button className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              View Full Catalog
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;