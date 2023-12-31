import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/basic.css'
import './css/index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice.js';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
