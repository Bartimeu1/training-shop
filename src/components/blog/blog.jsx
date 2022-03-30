import React from 'react';
import './blog.css';

import blogImage1 from '../../images/blogImage1.jpg';
import blogImage2 from '../../images/blogImage2.jpg';
import blogImage3 from '../../images/blogImage3.jpg';

const Blog = function () {
  return (
    <section className='blog'>
        <div className="container blog__container">
          <div className="blog__topper">
            <h3 className="blog__topper-title">LATEST FROM BLOG</h3>
            <p className="blog__topper-button">SEE ALL</p>
          </div>
          <div className="blog__cards">
            <div className="blog__card" style={{ backgroundImage: `url(${blogImage1})` }}>
              <div className="blog__card__inner">
                <h5 className="blog__card-title">The Easiest Way to Break</h5>
                <p className="blog__card-text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
              </div>
            </div>
            <div className="blog__card" style={{ backgroundImage: `url(${blogImage2})` }}>
              <div className="blog__card__inner">
                <h5 className="blog__card-title">Wedding Season</h5>
                <p className="blog__card-text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
              </div>
            </div>
            <div className="blog__card" style={{ backgroundImage: `url(${blogImage3})` }}>
              <div className="blog__card__inner">
                <h5 className="blog__card-title">Recent Favorites On Repeat</h5>
                <p className="blog__card-text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Blog;
