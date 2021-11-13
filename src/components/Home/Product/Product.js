import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Product.css';
import Purchase from '../../Purchase/Purchase'

const Product = ({product}) => {
    const { _id, name, description, img } = product;
    const { productId } = useParams();
    return (
        <>
        <div className="product my-card">
            <div className="img-wrapper">
                <img src={img} alt="" height="304" className="my-card-img" />
            </div>
            <div className="card-body-wrapper">
                <div className="card-txt">
                    <h4>{name}</h4>
                    <p className="">{description}</p>
                </div>
                <div className="details-btn">
                    <Link to={`/purchase/${_id}`}>
                        <button className="my-btn">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Product;