import React from 'react'
import './NewCollections.css'
import koleksi_baru from '../Assets/dummy'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>Koleksi Terbaru</h1>
      <hr />
      <div className="collections">
        {koleksi_baru.map((item) => {
        return <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
      })}
      </div>
    </div>
  )
}

export default NewCollections
