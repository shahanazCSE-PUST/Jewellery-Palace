import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-wildwood-35872.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts((data.slice(0,6)));
                console.log(data);
            });
    }, [])

    return (
        <div>
            <h2  id="products" className="tittle-text my-5">Our <span className="span-color">Products</span></h2>
            <div className="product-container container">
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product> )
                }
                
            </div>
        </div>
    );
};

export default Products;