import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <div className="text-dark pb-2 pt-5 mt-5 my-footer">
            <div className="my-grid ps-5">
                <div className="ps-5 text-start grid-item">
                    <h3 className="">Jewellery Guide</h3>
                    <div>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Buying and Price Guide.</li></a>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Diamond and Solitaire Guide.</li></a>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Jewellery Care Guide. </li></a>
                        <a href="/guide" className="text-decoration-none text-dark"><li> Certification Guide.</li></a>

                    </div>
                </div>
                <div className=" text-start ps-5 grid-item">
                    <h3>Categories</h3>
                    <div>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Gold Jewellery.</li></a>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Diamond Jewellery.</li></a>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Platinum Jewellery.</li></a>
                        <a href="/guide" className="text-decoration-none text-dark"><li>Pearl Jewellery.</li></a>
                    </div>
                </div>
                <div className="text-start ps-5">
                    <h3>Quick <span>Contact</span></h3>
                    <div>
                        <li> Phone: +1309948555 </li>
                        <li> Email: JewelleryPalace@gmail.com </li>
                        <li> Wed: www.JewelleryPalace.com</li>
                        <li> Fax: (123) 123-4567</li>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <h4 className="mb-3">Keep Updated</h4>
                <div className="icon mt-2">
                    <i className="fab fa-facebook-f" ></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-google-plus-g"></i>
                </div>
            </div>
            <p className="text-center">&reg; 2021 All rights reserved</p>
        </div>
    );
};

export default Footer;