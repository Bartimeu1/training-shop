import React from 'react';

import Pagetop from '../components/pagetop/pagetop';
import Menfilter from '../components/menfilter/menfilter';

const MenProductsPage = function () {
  return (
    <div className="MenProductsPage">
        <Pagetop title='men' path='Men'></Pagetop>
        <Menfilter></Menfilter>
    </div>
  );
}

export default MenProductsPage;
