import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import icon_dropdown from '../Components/Assets/arrow-down-sign-to-navigate.png';
import Item from '../Components/Item/Item';

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={icon_dropdown} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product &&
          all_product.map((item) => {
            if (category && category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price_old={item.price_old}
                  price_new={item.price_new}
                  className="product-item"
                />
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default ShopCategory;
