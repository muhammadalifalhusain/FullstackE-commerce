import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
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
  )
}

export default Item
