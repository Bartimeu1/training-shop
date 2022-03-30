import React from 'react';
import './menfilter.css';

import Mencards from '../mencards/mencards';

import filterImage1 from '../../images/filterImage1.png';
import filterImage2 from '../../images/filterImage2.png';
import filterImage3 from '../../images/filterImage3.png';
import filterLoading from '../../images/filterLoading.png';

const Menfilter = function () {
  return (
    <section className='filter'>
        <div className="container filter__container">
            <div className="filter__topper">
                <div className="filter__left">
                    <img src={filterImage1} className='filter__left-img' />
                    <p className="filter__left-text">Filter</p>
                </div>
                <div className="filter__right">
                    <img src={filterImage2} className='filter__right-img filter__right-img--first' />
                    <img src={filterImage3} className='filter__right-img' />
                </div>
            </div>
            <Mencards></Mencards>
            <div className="filter__loading">
                <img src={filterLoading} alt="" />
            </div>
        </div>
    </section>
  );
}

export default Menfilter;
