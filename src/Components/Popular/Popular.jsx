import React from 'react'
import './Popular.css'
import data_product from '../Assets/dummy'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Style</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
        return <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
      })}
      </div>
    </div>
  )
}

export default Popular
