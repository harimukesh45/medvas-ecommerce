import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, MessageCircle, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products'; 

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id); 
  
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({ name: '', address: '' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}><h2>Product not found.</h2></div>;

  const totalPrice = product.price * quantity;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  const handleOrder = () => {
    if (!customerInfo.name || !customerInfo.address) {
      alert("Please fill in your Name and Delivery Address."); return;
    }
    const phoneNumber = "1234567890"; // REPLACE WITH YOUR NUMBER
    const message = `Hello MEDVAS ENTERPRISES, I'd like to place an order.%0A%0A*Product:* ${product.name}%0A*Quantity:* ${quantity}%0A*Total:* ₹${totalPrice}%0A%0A*Customer Details:*%0AName: ${customerInfo.name}%0AAddress: ${customerInfo.address}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const inputStyle = { width: '100%', padding: '14px', borderRadius: '8px', border: '2px solid var(--border-color)', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' };

  return (
    <div className="container" style={{ maxWidth: '1100px' }}>
      <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '30px', fontWeight: '600' }}>
        <ArrowLeft size={18} /> Back to Catalog
      </Link>

      <div className="card product-detail-layout" style={{ display: 'flex', gap: '50px', padding: '40px' }}>
        
        {/* Left: Carousel */}
        <div className="product-image-container" style={{ flex: '1', minWidth: '400px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', backgroundColor: '#E2E8F0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            {/* The Image */}
            <img src={product.images[currentImageIndex]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
            
            {/* Arrows */}
            <button onClick={prevImage} style={arrowStyle({ left: '10px' })}><ChevronLeft size={24} /></button>
            <button onClick={nextImage} style={arrowStyle({ right: '10px' })}><ChevronRight size={24} /></button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
            {product.images.map((img, idx) => (
              <div key={idx} onClick={() => setCurrentImageIndex(idx)} style={{ width: '60px', height: '60px', borderRadius: '8px', backgroundColor: '#E2E8F0', cursor: 'pointer', border: idx === currentImageIndex ? '2px solid var(--accent-vibrant)' : 'none', overflow: 'hidden' }}>
                 <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="product-details-container" style={{ flex: '1', minWidth: '350px', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{product.name}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '25px' }}>{product.description}</p>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Kit Includes:</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
              {product.itemsIncluded.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                  <CheckCircle2 size={18} color="var(--accent-vibrant)" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '25px', backgroundColor: 'var(--bg-main)', borderRadius: '12px', marginTop: 'auto', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy-dark)' }}>Total:</span>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--navy-dark)' }}>₹{totalPrice}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <strong style={{ color: 'var(--navy-dark)' }}>Quantity:</strong>
              <div style={{ display: 'flex', alignItems: 'center', border: '2px solid var(--border-color)', borderRadius: '8px', backgroundColor: '#fff' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '10px 15px', border: 'none', background: 'none', cursor: 'pointer' }}><Minus size={18}/></button>
                <span style={{ padding: '0 15px', fontWeight: '700', fontSize: '1.1rem' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '10px 15px', border: 'none', background: 'none', cursor: 'pointer' }}><Plus size={18}/></button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
              <input type="text" placeholder="Full Name" value={customerInfo.name} onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})} style={inputStyle} />
              <textarea placeholder="Delivery Address" value={customerInfo.address} onChange={e => setCustomerInfo({...customerInfo, address: e.target.value})} style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} />
            </div>

            <button className="btn-primary" onClick={handleOrder} style={{ width: '100%', padding: '18px', fontSize: '1.1rem' }}>
              <MessageCircle size={22} /> Place Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const arrowStyle = (position) => ({
  position: 'absolute', top: '50%', transform: 'translateY(-50%)', ...position,
  backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
  width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
});

export default ProductDetail;