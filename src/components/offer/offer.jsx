import React from 'react';
import './offer.css';

import offerImg1 from '../../images/offerImage1.png';
import offerImg2 from '../../images/offerImage2.png';

const Offer = function () {
  return (
    <section className='offer'>
        <div className="offer__image offer__image--right" style={{ backgroundImage: `url(${offerImg1})` }}></div>
        <div className="offer__container">
            <form className="offer__form">
                <p className="offer__form-subtitle">Special Offer</p>
                <h3 className="offer__form-title">Subscribe <br /> And <span className='offer__form-title--red'>Get 10% Off</span></h3>
                <input type="text" className='offer__form-input' placeholder='Enter your email'/>
                <button type='submit' className='offer__form-button'>Subscribe</button>
            </form>
        </div>
        <div className="offer__image offer__image--left" style={{ backgroundImage: `url(${offerImg2})` }}></div>
    </section>
  );
}

export default Offer;
