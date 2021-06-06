import React from 'react';
import Services from './components/Services';
import Header from './components/Header';
import ShopNow from './components/ShopNow';
import Products from './components/Products';
import Banner from './components/Banner';
import Instagram from './components/Instagram';
const Home =()=> {
  return (
    <>
    <Header/>
    <div className="container">
    <Services/>
    <ShopNow/>
    <Products/>
    </div>
    <Banner/>
     <div className="container">
     <Instagram/>
     </div>
    </>
  );
}

export default Home;
