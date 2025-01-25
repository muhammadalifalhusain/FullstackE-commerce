import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import koleksi_baru from '../Assets/dummy';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = koleksi_baru.find(item => item.id === parseInt(id));

  // State untuk mengontrol gambar utama
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return (
    <div className="product-detail">
      {/* Nama produk */}
      <h1 className="product-title">{product.name}</h1>

      {/* Konten produk */}
      <div className="product-content">
        {/* Gambar detail di sebelah kiri */}
        <div className="product-details">
          {product.details.map((detailImage, index) => (
            <img
              key={index}
              src={detailImage}
              alt={`${product.name} detail ${index + 1}`}
              className="detail-image"
              onMouseEnter={() => setMainImage(detailImage)} // Ganti gambar utama saat hover
              onMouseLeave={() => setMainImage(product.image)} // Kembalikan ke gambar utama
            />
          ))}
        </div>

        {/* Gambar utama */}
        <div className="product-main-image">
          <img src={mainImage} alt={product.name} className="main-image" />
        </div>

        {/* Informasi produk */}
        <div className="product-info">
          <p className="product-description">{product.description}</p>
          <p className="product-price">Rp. {product.price}</p>
          <button className="buy-now-button">Beli Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
