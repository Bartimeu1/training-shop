import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import headerTel from '../../images/header-tel.png';
import headerAddress from '../../images/header-address.png';
import headerClock from '../../images/header-clock.png';
import headerFacebook from '../../images/header-facebook.png';
import headerTwitter from '../../images/header-twitter.png';
import headerInst from '../../images/header-inst.png';
import headerPin from '../../images/header-pin.png';
import headerFunctions1 from '../../images/functions-1.png';
import headerFunctions2 from '../../images/functions-2.png';
import headerFunctions3 from '../../images/functions-3.png';
import headerFunctions4 from '../../images/functions-4.png';

const Header = function () {
    return (
      <header className='header'>
        <div className="header__container container">
          <div className="header__topper">
            <div className="header__info">
              <div className="header__info__block">
                <img src={headerTel} alt="" className='header__info-image'/>
                <p className="header__info-text">+375 29 100 20 30</p>
              </div>
              <div className="header__info__block">
                <img src={headerAddress} alt="" className='header__info-image' />
                <p className="header__info-text">Belarus, Gomel, Lange 17</p>
              </div>
              <div className="header__info__block header__info__block--last">
                <img src={headerClock} alt="" className='header__info-image' />
                <p className="header__info-text">All week 24/7</p>
              </div>
            </div>
            <div className="header__social">
              <a href="#"><img src={headerFacebook} alt="" className='header__social-link'/></a>
              <a href="#"><img src={headerTwitter} alt="" className='header__social-link'/></a>
              <a href="#"><img src={headerInst} alt="" className='header__social-link'/></a>
              <a href="#"><img src={headerPin} alt="" className='header__social-link'/></a>
            </div>
          </div>
          <div className="header__main">
            <p className="header-logo">CleverShop</p>
            <nav className="header__menu">
              <ul className="header__menu__list">
                <li><Link to="/" className="header__menu-link">About Us</Link></li>
                <li><Link to="/WomenProductsPage" className="header__menu-link">Women</Link></li>
                <li><Link to="/MenProductsPage" className="header__menu-link">Men</Link></li>
                <li><a href="#" className="header__menu-link">Beauty</a></li>
                <li><a href="#" className="header__menu-link">Accessories</a></li>
                <li><a href="#" className="header__menu-link">Blog</a></li>
                <li><a href="#" className="header__menu-link">Contact</a></li>
              </ul>
            </nav>
            <div className="header__functions">
              <img src={headerFunctions1} alt="" className='header__functions-button'/>
              <img src={headerFunctions2} alt="" className='header__functions-button'/>
              <img src={headerFunctions3} alt="" className='header__functions-button'/>
              <img src={headerFunctions4} alt="" className='header__functions-button'/>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  