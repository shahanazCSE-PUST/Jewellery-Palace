import React, { useEffect, useState } from 'react';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-wildwood-35872.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, []);

    const handleDelete = id => {
        const url = `https://mysterious-wildwood-35872.herokuapp.com/products/${id}`;
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert('successfully cancled!');
                        const remainingProducts = products.filter(user => user._id != id);
                        setProducts(remainingProducts);
                    }

                })
        }

    }
    return (
        <div>
              <h2 className="tittle-text mb-5 span-color">All Products: {products.length}</h2>
            <div className="product-container container">
                {
                    products.map(product => <div className="my-product py-2 my-card"
                        key={product._id}
                    >
                            <div className="img-wrapper">
                                <img src={product.img} alt="" className="detail-img" />
                            </div>
                            <div className="card-body-wrapper">
                                <div className="card-txt">
                                    <h4>{product.name}</h4>
                                    <p className="">{product.description}</p>
                                    <p><span className="fw-bold">Price: </span> {product.price}</p>
                                </div>
                                <div className="details-btn">
                                    <button onClick={() => handleDelete(product._id)} className="my-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default ManageProducts;