import React from 'react';

import Banner from '../components/banner/banner';
import Advantages from '../components/advantages/advantages';
import Women from '../components/women/women';
import Men from '../components/men/men';
import News from '../components/news/news';
import Offer from '../components/offer/offer';
import Blog from '../components/blog/blog';

const MainPage = function () {
  return (
    <div className="mainPage">
      <Banner></Banner>
      <Advantages></Advantages>
      <Women></Women>
      <Men></Men>
      <News></News>
      <Offer></Offer>
      <Blog></Blog>
    </div>
  );
}

export default MainPage;
