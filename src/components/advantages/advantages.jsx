import React from 'react';
import './advantages.css';

import Advantages1 from '../../images/advantages-1.png';
import Advantages2 from '../../images/advantages-2.png';
import Advantages3 from '../../images/advantages-3.png';

const Advantages = function () {
    return (
      <section className='advantages'>
          <div className="advantages__container container">
            <div className="advantages__block">
              <img src={Advantages1} alt="" className="advantages-image"/>
              <div className="advantages__text">
                  <h5 className="advantages-title">FREE SHIPPING</h5>
                  <p className="advantages-subtitle">On all UA order or order above $100</p>
              </div>
            </div>
            <div className="advantages__block">
              <img src={Advantages2} alt="" className="advantages-image"/>
              <div className="advantages__text">
                  <h5 className="advantages-title">30 DAYS RETURN</h5>
                  <p className="advantages-subtitle">Simply return it within 30 days for an exchange</p>
              </div>
            </div>
            <div className="advantages__block">
              <img src={Advantages3} alt="" className="advantages-image"/>
              <div className="advantages__text">
                  <h5 className="advantages-title">SUPPORT 24/7</h5>
                  <p className="advantages-subtitle">Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
      </section>
    );
}

export default Advantages;
