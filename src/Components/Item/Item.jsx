import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${props.id}`); // Navigasi ke halaman detail produk
  };

  return (
    <div className='item' onClick={handleClick}>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rp. {props.price}
        </div>
        <div className="item-price-old">
          Rp. {props.price}
        </div>
      </div>
    </div>
  );
};

export default Item;
