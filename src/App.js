import React from 'react'
import Navbar from './Components/Navbar';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart'
import Placeorder from './Components/Placeorder'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Order' element={<Placeorder/>} />
      </Routes>
    </div>
  );
}