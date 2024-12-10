import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import "./CartItems.css";

const CartItems = () => {
  const Navigate = useNavigate();
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  
  // State for promo code
  const [promoCode, setPromoCode] = useState('');
  
  // State for applied discount
  const [discount, setDiscount] = useState(0);

  const go_to_checkout = (e) => {
    e.preventDefault();
    const totalAmount = getTotalCartAmount() - discount; // Apply discount
    if (totalAmount === 0) {
      // If cart is empty, display an error message
      Swal.fire({
        title: 'Cart is Empty',
        text: 'Please add items to your cart before proceeding to checkout.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      // Cart is not empty, proceed to checkout
      Swal.fire({
        title: 'Proceed to Checkout?',
        text: 'Are you sure you want to proceed to checkout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, proceed',
        cancelButtonText: 'No, cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/address"); // Navigate to checkout if user confirms
        }
      });
    }
  }
  
  // Function to apply promo code
  const applyPromoCode = () => {
    // Define promo codes and their corresponding discounts
    const promoCodes = {
      'SAVE10': 850,
      'GET20OFF': 1450,
      'FREESHIP': getTotalCartAmount() > 100 ? 10 : 0 // Example: Free shipping for orders over ₹100
    };

    // Check if the entered promo code exists in the promoCodes object
    if (promoCodes.hasOwnProperty(promoCode)) {
      // Apply discount
      setDiscount(promoCodes[promoCode]);
      // Display success message
      Swal.fire({
        title: 'Promo Code Applied',
        text: `You've got a discount of ₹${promoCodes[promoCode]}`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      // Invalid promo code
      Swal.fire({
        title: 'Invalid Promo Code',
        text: 'Please enter a valid promo code.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  return (
    <>
      <div className='cartitems'>
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Size</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt="" className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>{e.size}</p>
                  <p>₹{e.new_price}</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>₹{e.new_price * cartItems[e.id]}</p>
                  <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        {/* Promo code section */}
        <div className="promo-code-section">
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="Enter Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromoCode}>Submit</button>
            </div>
          </div>
        </div>
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Discount</p>
                <p>- ₹{discount}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount() - discount}</h3>
              </div>
            </div>
            <button onClick={go_to_checkout}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CartItems;
