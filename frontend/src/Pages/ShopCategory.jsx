
import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import Home from '../Components/Home/Home';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedProducts = () => {
    const filteredProducts = all_product.filter(item => item.category === props.category);
    if (sortOrder === 'lowToHigh') {
      return filteredProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOrder === 'highToLow') {
      return filteredProducts.sort((a, b) => b.new_price - a.new_price);
    } else {
      return filteredProducts;
    }
  };

  return (
    <>
      <Home />
      <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of {sortedProducts().length} products
          </p>
          <div className="shopcategory-sort">
            Sort by
            <select 
              value={sortOrder} 
              onChange={handleSortChange} 
              style={{ marginLeft: '10px', border: '1px solid #ccc', borderRadius: '5px', appearance: 'none', background: `#fff url(${dropdown_icon}) no-repeat right 10px center`, backgroundSize: '10px' }}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="shopcategory-products" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {sortedProducts().map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
