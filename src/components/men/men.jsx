import React, { useState } from 'react';
import './men.css';
import Card from '../card/card';

import Mencards from '../mencards/mencards';

const Men = function () {
    return (    
      <section className="men">
          <div className="container men__container">
              <div className="men__topper">
                  <h2 className="men-title">MEN’S</h2>
                  <div className="men__filter">
                    <ul className="men__filter__buttons">
                        <li><p className="men__filter-button men__filter-button--active">NEW ARRIVALS</p></li>
                        <li><p className="men__filter-button">SPECIALS</p></li>
                        <li><p className="men__filter-button">BESTSELLERS</p></li>
                        <li><p className="men__filter-button">MOST VIEWED</p></li>
                        <li><p className="men__filter-button">FEATURED PRODUCTS</p></li>
                    </ul>
                  </div>
              </div>
              <Mencards></Mencards>
              <button className='men__button'>See All</button>
          </div>
      </section>
    );
}

export default Men;