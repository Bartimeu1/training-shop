import React from 'react';
import './news.css';

import newsImage1 from '../../images/newsBg1.jpg';
import newsImage2 from '../../images/newsBg2.jpg';

const News = function () {
  return (
    <section className="news">
        <div className="news__container container">
            <div className="news__block" style={{ backgroundImage: `url(${newsImage1})` }}>
                <div className="news__inner">
                    <p className="news__inner-subtitle">New Season</p>
                    <h4 className="news__inner-title">lookbook collection</h4>
                </div>
            </div>
            <div className="news__block" style={{ backgroundImage: `url(${newsImage2})` }}>
                <div className="news__inner">
                    <p className="news__inner-subtitle">Sale</p>
                    <h4 className="news__inner-title">Get UP to <span className='news__inner-title--red'>50% off</span></h4>
                </div>
            </div>
        </div>
    </section>
  );
}

export default News;
