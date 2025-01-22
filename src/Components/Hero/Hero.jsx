import React from 'react'
import './Hero.css'
import Arrow_icon from '../Assets/arrow_icon.png'
import Tap from '../Assets/tap.png'
import Image_Icon from '../Assets/upd_hero_img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Produk Baru</h2>
        <div>
            <div className="hero-hand-icon" >
                <p>New</p>
                <img src={Tap} alt="" width="20" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Koleksi Terbaru</div>
            <img src={Arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={Image_Icon} alt=""/>
      </div>
    </div>
  )
}

export default Hero
