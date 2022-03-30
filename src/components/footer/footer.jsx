import React from 'react';
import './footer.css';

import footerFacebook from '../../images/header-facebook.png';
import footerTwitter from '../../images/header-twitter.png';
import footerInst from '../../images/header-inst.png';
import footerPin from '../../images/header-pin.png';
import footerInfo1 from '../../images/footerInfo1.png';
import footerInfo2 from '../../images/footerInfo2.png';
import footerInfo3 from '../../images/footerInfo3.png';
import footerInfo4 from '../../images/footerInfo4.png';
import footerBottomerImg from '../../images/footerBottomerImg.png';

const Footer = function () {
  return (
    <footer className="footer">
        <footer className="container container">
            <div className="footer__topper">
                <h4 className="footer__topper-title">BE IN TOUCH WITH US:</h4>
                <form className="footer__form">
                    <input type="text" className="footer__form-input" placeholder='Enter your email'/>
                    <button type="submit" className='footer__form-button'>Join Us</button>
                </form>
                <div className="footer__social">
                    <a href="#"><img src={footerFacebook} alt="" className='footer__social-link'/></a>
                    <a href="#"><img src={footerTwitter} alt="" className='footer__social-link'/></a>
                    <a href="#"><img src={footerInst} alt="" className='footer__social-link'/></a>
                    <a href="#"><img src={footerPin} alt="" className='footer__social-link footer__social-link--last'/></a>
                </div>
            </div>
            <div className="footer__info">
                <ul className="footer__info__block">
                    <li><h5 className="footer__info-title">Categories</h5></li>
                    <li><a href="#" className="footer__info-link">Men</a></li>
                    <li><a href="#" className="footer__info-link">Women</a></li>
                    <li><a href="#" className="footer__info-link">Accessories</a></li>
                    <li><a href="#" className="footer__info-link">Beauty</a></li>
                </ul>
                <ul className="footer__info__block">
                    <li><h5 className="footer__info-title">Infomation</h5></li>
                    <li><a href="#" className="footer__info-link">About Us</a></li>
                    <li><a href="#" className="footer__info-link">Contact Us</a></li>
                    <li><a href="#" className="footer__info-link">Blog</a></li>
                    <li><a href="#" className="footer__info-link">FAQs</a></li>
                </ul>
                <ul className="footer__info__block">
                    <li><h5 className="footer__info-title">Useful links</h5></li>
                    <li><a href="#" className="footer__info-link">Terms & Conditions</a></li>
                    <li><a href="#" className="footer__info-link">Returns & Exchanges</a></li>
                    <li><a href="#" className="footer__info-link">Shipping & Delivery</a></li>
                    <li><a href="#" className="footer__info-link">Privacy Policy</a></li>
                </ul>
                <ul className="footer__info__block">
                    <li><h5 className="footer__info-title footer__info-title--last">CONTACT US</h5></li>
                    <li className='footer__info-link-wrapper'>
                        <img src={footerInfo1} className='footer__info-img' />
                        <a href="#" className="footer__info-link">Belarus, Gomel, Lange 17</a>
                    </li>
                    <li className='footer__info-link-wrapper'>
                        <img src={footerInfo2} className='footer__info-img' />
                        <a href="#" className="footer__info-link">+375 29 100 20 30</a>
                    </li>
                    <li className='footer__info-link-wrapper'>
                        <img src={footerInfo3} className='footer__info-img' />
                        <a href="#" className="footer__info-link">All week 24/7</a>
                    </li>
                    <li className='footer__info-link-wrapper'>
                        <img src={footerInfo4} className='footer__info-img' />
                        <a href="#" className="footer__info-link footer__info-link--line">info@clevertec.ru</a>
                    </li>
                </ul>
            </div>
            <div className="footer__bottomer">
                <p className="footer__bottomer-info">Copyright © 2032 all rights reserved</p>
                <img src={footerBottomerImg} className='footer__bottomer-img'/>
                <p className="footer__bottomer-text">Clevertec.ru/training</p>
            </div>
        </footer>
    </footer>
  );
}

export default Footer;
