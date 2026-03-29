import React from 'react';
import { MessageCircle } from 'lucide-react';

function FloatingWhatsApp() {
  const phoneNumber = "9489461612"; // REPLACE WITH YOUR NUMBER
  const defaultMessage = "Hello MedVas Enterprises, I have a general inquiry.";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366', // WhatsApp Green
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'transform 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle size={32} />
    </button>
  );
}

export default FloatingWhatsApp;