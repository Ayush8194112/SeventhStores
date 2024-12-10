import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
// import { memo } from 'react'
import Login from './login';
import { useSelector } from 'react-redux';
const Cart = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
     
    
      <CartItems/>

    
    </div>
  )
}

export default Cart
