import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Register from './Pages/register.jsx';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Home from './Components/Home/Home.jsx';
import Payment from "./Components/CartItems/Payment.js"
import Address from './Components/CartItems/Address.jsx'
import CartItems from './Components/CartItems/CartItems.jsx';
import Login from './Pages/login.jsx';
import { useSelector } from 'react-redux';
// import SendToDataBase from './Pages/SendToDataBase';

function App() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />

        <Route path="/cart" element={count?<CartItems/>:<Login/>}>
        <Route path="address" element={<Address/>}/>
        </Route>
      
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        { <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/> }
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/address' element={<Address/>}/>

        <Route path='/login'  element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
        {/* <Route path='*' element={<h1>404 errors...</h1>}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
