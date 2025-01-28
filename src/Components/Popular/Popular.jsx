import React, { useRef } from 'react';
import './Popular.css';
import data_product from '../Assets/dummy';
import Item from '../Item/Item';

const Popular = () => {
  const sliderRef = useRef(null);

  const handleDragStart = (e) => {
    sliderRef.current.isDragging = true;
    sliderRef.current.startX = e.pageX || e.touches[0].pageX;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!sliderRef.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - sliderRef.current.startX) * 2; // Adjust scrolling speed
    sliderRef.current.scrollLeft -= walk;
  };

  const handleDragEnd = () => {
    sliderRef.current.isDragging = false;
  };

  return (
    <div className="popular">
      <h1>Popular In Style</h1>
      <hr />
      <div
        className="popular-slider"
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {data_product.map((item) => (
          <div className="slider-item" key={item.id}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              price_new={item.price_new}
              price_old={item.price_old}
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
