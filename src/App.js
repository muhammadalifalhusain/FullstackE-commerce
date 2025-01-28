import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Footer from './Components/Footer/Footer';

function App() {
  const location = useLocation(); // Mengambil path aktif

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/style' element={<ShopCategory category="style" />} />
        <Route path='/sandals' element={<ShopCategory category="sandals" />} />
        <Route path='/casual' element={<ShopCategory category="casual" />} />
        <Route path='/running' element={<ShopCategory category="running" />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
      {/* Footer hanya ditampilkan jika bukan di halaman login */}
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
