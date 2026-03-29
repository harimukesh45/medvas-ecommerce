import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Products() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Our Complete <span className="text-accent">Catalog</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Browse our range of high-precision medical supplies.</p>
      </div>
      
      <div className="grid-auto">
        {products.map(product => (
          <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '240px', backgroundColor: '#E2E8F0', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{product.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1 }}>{product.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
              <span style={{ fontWeight: '800', color: 'var(--navy-dark)', fontSize: '1.4rem' }}>₹{product.price}</span>
              <Link to={`/products/${product.id}`}><button className="btn-primary" style={{ padding: '10px 20px' }}>View Kit</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;