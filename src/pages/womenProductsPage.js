import React from 'react';

import Pagetop from '../components/pagetop/pagetop';
import Womenfilter from '../components/womenfilter/womenfilter';

const WomenProductsPage = function () {
  return (
    <div className="WomenProductsPage">
        <Pagetop title='women' path='Women'></Pagetop>
        <Womenfilter></Womenfilter>
    </div>
  );
}

export default WomenProductsPage;
