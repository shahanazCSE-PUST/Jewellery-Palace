import React, { useEffect, useState } from 'react';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-wildwood-35872.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            });
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <h2  id="products" className="tittle-text my-5">Our <span className="span-color">Products</span></h2>
            <div className="product-container container">
                {
                    products.map(product => <ExploreProduct
                    key={product._id}
                    product={product}
                    ></ExploreProduct> )
                }
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;