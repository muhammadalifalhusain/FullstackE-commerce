import React from 'react'
import './Offers.css'
import exclusive_product from '../Assets/exclusive.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <div className="text-container">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>Only On Best Seller Product's</p>
          <button>Check Now</button>
        </div>
        
      </div>
      <div className="offers-right">
        <div className="image-container">
          <img src={exclusive_product} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Offers
