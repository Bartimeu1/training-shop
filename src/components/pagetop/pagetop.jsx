import React from 'react';
import './pagetop.css';

import shareImg from '../../images/share.png';

const Pagetop = (props) => {
  return (
    <section className='pagetop'>
        <div className="container pagetop__container">
            <div className="pagetop__topper">
                <div className="pagetop__links">
                    <a href="#" className='pagetop__link--home'>Home</a>
                    <a href="#" className='pagetop__link--active'>{props.path}</a>
                </div>
                <div className="pagetop__share">
                  <img src={shareImg} className='pagetop__share-img' />
                  <p className="pagetop__share-text">Share</p>
                </div>
            </div>
            <div className="pagetop__bottomer">
              <h1 className="pagetop-title">{props.title}</h1>
            </div>
        </div>
    </section>
  );
}

export default Pagetop;
