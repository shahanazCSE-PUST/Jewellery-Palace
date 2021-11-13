import React from 'react';
import './Promises.css'

const Promises = () => {
    return (
        <div>
            <h2 className="tittle-text my-5">Our <span className="span-color">Promises</span></h2>
            <div className="product-container container">
                <div className="promise my-card">
                    <div className="img-wrapper">
                        <i className="fas fa-sync"></i>
                    </div>
                    <div className="card-body-wrapper">
                        <div className="text">
                            <p>Lifetime Exchange <br />And Buyback</p>
                        </div>
                    </div>
                </div>
                <div className="promise my-card">
                    <div className="img-wrapper">
                    <i className="fas fa-hand-holding-usd"></i>
                    </div>
                    <div className="card-body-wrapper">
                        <div className="text">
                            <p>100%<br />Refund</p>
                        </div>
                    </div>
                </div>
                <div className="promise my-card">
                    <div className="img-wrapper">
                    <i className="fas fa-house-user"></i>
                    </div>
                    <div className="card-body-wrapper">
                        <div className="text">
                            <p>Try Jewellery <br />at Home</p>
                        </div>
                    </div>
                </div>
                <div className="promise my-card">
                    <div className="img-wrapper">
                    <i className="fas fa-truck-moving"></i>
                    </div>
                    <div className="card-body-wrapper">
                        <div className="text">
                            <p>Free Shipping <br />And Insurance</p>
                        </div>
                    </div>
                </div>
                <div className="promise my-card">
                    <div className="img-wrapper">
                    <i className="fas fa-store-alt"></i>
                    </div>
                    <div className="card-body-wrapper">
                        <div className="text">
                            <p>Physical Store <br />Near You</p>
                        </div>
                    </div>
                </div>
                <div className="promise my-card">
                    <div className="img-wrapper">
                    <i className="far fa-check-circle"></i>
                    </div>
                    <div className="card-body-wrapper">
                        <div className="text">
                            <p>100% Certified <br />Jewellery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promises;

