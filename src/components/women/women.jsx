import React, { useState } from 'react';
import './women.css';
import Card from '../card/card';

import Womencards from '../womencards/womencards';

const Women = function () {
    return (    
      <section className="women">
          <div className="container women__container">
              <div className="women__topper">
                  <h2 className="women-title">WOMEN’S</h2>
                  <div className="women__filter">
                    <ul className="women__filter__buttons">
                        <li><p className="women__filter-button women__filter-button--active">NEW ARRIVALS</p></li>
                        <li><p className="women__filter-button">SPECIALS</p></li>
                        <li><p className="women__filter-button">BESTSELLERS</p></li>
                        <li><p className="women__filter-button">MOST VIEWED</p></li>
                        <li><p className="women__filter-button">FEATURED PRODUCTS</p></li>
                    </ul>
                  </div>
              </div>
              <Womencards></Womencards>
              <button className='women__button'>See All</button>
          </div>
      </section>
    );
}

export default Women;