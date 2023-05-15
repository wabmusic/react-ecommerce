import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Products from './components/products';
import Login from './components/login';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="products" element={ <Products/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="cart" element={ <Cart/> } />
      </Routes>
    </div>

  );
}

export default App;
