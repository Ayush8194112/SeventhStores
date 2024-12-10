import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigator=useNavigate()
  const count = useSelector((state) => state.counter.value)
  const handleSizeSelection = (size) => {
    console.log("Selected size:", size);
    setSelectedSize(size);
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* this is show you the multiple image section*/}
          <img src={product.image} alt="" className='image_hover_reaction' />
          <img src={product.image} alt="" className='image_hover_reaction' />
          <img src={product.image} alt="" className='image_hover_reaction' />
          <img src={product.image} alt="" className='image_hover_reaction' />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img zoom ' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div onClick={() => handleSizeSelection('S')}>S</div>
            <div onClick={() => handleSizeSelection('M')}>M</div>
            <div onClick={() => handleSizeSelection('L')}>L</div>
            <div onClick={() => handleSizeSelection('XL')}>XL</div>
            <div onClick={() => handleSizeSelection('XXL')}>XXL</div>
          </div>
        </div>
        <div>Selected Size: {selectedSize}</div>
        {/* Button inside .productdisplay-right */}
        <button onClick={() =>{count? addToCart(product.id, selectedSize):navigator("/login")}}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
