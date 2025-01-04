import React from 'react';

const CartWidget = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '5px 10px',
      backgroundColor: ' #2dfe92',
      borderRadius: '5px',
      color: '#333',
      fontWeight: 'bold',
      cursor: 'pointer',
    }}>
      🛒 <span>0</span>
    </div>
  );
};

export default CartWidget;


