import React from 'react';
import './banner.css';

import bannerArrow from '../../images/banner-arrow.png';
import bannerBgMain from '../../images/banner-main.jpg';
import bannerBgWomen from '../../images/banner-woman.png';
import bannerBgMen from '../../images/banner-man.png';
import bannerBgAccessories from '../../images/banner-accessories.jpg';

const Banner = function () {
  return (
    <section className='banner'>
      <div className="banner__container container">
        <div className="banner__slider" style={{ backgroundImage: `url(${bannerBgMain})` }}>
          <img src={bannerArrow} alt="" className="banner__slider-arrow banner__slider-arrow--left"/>
          <div className="banner__block">
            <p className="banner__block-subtitle">Banner</p>
            <h3 className="banner__block-title">your Title text</h3>
          </div>
          <img src={bannerArrow} alt="" className="banner__slider-arrow banner__slider-arrow--right"/>
        </div>
        <div className="banner__products">
          <div className="banner__products--top">
            <div className="banner__products--women" style={{ backgroundImage: `url(${bannerBgWomen})` }}>
              <div className="banner__products__inner">
                <h4 className="banner__products-title">Women</h4>
              </div>
            </div>
            <div className="banner__products--men" style={{ backgroundImage: `url(${bannerBgMen})` }}>
              <div className="banner__products__inner">
                <h4 className="banner__products-title">men</h4>
              </div>
            </div>
          </div>
          <div className="banner__products--bottom" style={{ backgroundImage: `url(${bannerBgAccessories})` }}>
            <div className="banner__products__inner banner__products__inner--wide">
              <h4 className="banner__products-title">Accessories</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
