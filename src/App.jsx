import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './pages/mainPage';
import WomenProductsPage from './pages/womenProductsPage';
import MenProductsPage from './pages/menProductsPage';

import Layout from './components/layout/layout';


function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/WomenProductsPage' element={<WomenProductsPage />} />
          <Route path='/MenProductsPage' element={<MenProductsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
