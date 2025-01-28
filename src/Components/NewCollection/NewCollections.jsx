import React, { useRef, useState } from 'react';
import './NewCollections.css';
import koleksi_baru from '../Assets/dummy';
import Item from '../Item/Item';

const NewCollections = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    const scrollPosition = sliderRef.current.scrollLeft;
    const itemWidth = sliderRef.current.offsetWidth / 3; // Adjust visible items
    const newIndex = Math.round(scrollPosition / itemWidth);
    setActiveIndex(newIndex);
    sliderRef.current.scrollLeft = newIndex * itemWidth;
  };

  return (
    <div className='new-collections'>
      <h1>Koleksi Terbaru</h1>
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
        {koleksi_baru.map((item, index) => (
          <div
            className={`slider-item ${index === activeIndex ? 'active' : ''}`}
            key={item.id}
          >
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

export default NewCollections;
