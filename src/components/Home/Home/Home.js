import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../Shared/Footer/Footer'
import Reviews from '../Reviews/Reviews';
import Promises from '../Promises/Promises';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Promises></Promises>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;