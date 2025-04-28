import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './store/cartSlice';

function App() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🌿 Welcome to E-Plant</h1>
      <button
        onClick={() => dispatch(addItem('New Plant'))}
        style={{
          padding: '10px 20px',
          margin: '20px',
          fontSize: '18px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Add Plant to Cart
      </button>

      <h2>🛒 Cart Items:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
