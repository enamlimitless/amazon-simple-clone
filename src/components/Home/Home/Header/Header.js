import React from 'react';
import Product from '../../Product/Product';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="header-img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            <div className="home-row">
                <Product
                    id='1'
                    title='The Lean Startup lorem ipsum dolor sit amit !'
                    price={11.5}
                    rating={5}
                    img="https://bookaudiobook.com/wp-content/uploads/2019/03/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id='2'
                    title='PlayStation DualSense Wireless Controller – Midnight Black'
                    price={11.5}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/61O9tWR6WDS._SL1475_.jpg"
                />
            </div>
            <div className="home-row">
                <Product
                    id='3'
                    title='LETSCOM Smart Watch for Android Phones Compatible with iPhone, 1.55 Inch Touch Screen, Fitness Tracker with Heart Rate Monitor & Blood Oxygen Saturation, 5ATM Waterproof Smartwatch for Women Men-Black'
                    price={11.5}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/61wxbIsbj1S._AC_SX569_.jpg"
                />
                <Product
                    id='4'
                    title='Certified Refurbished Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Dark Charcoal'
                    price={11.5}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SL1000_.jpg"
                />
                <Product
                    id='5'
                    title='Apple iPad Pro (12.9-inch, Wi-Fi, 64GB) - Silver (3rd Generation)'
                    price={11.5}
                    rating={5}
                    img="https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-12-2020-1.jpg"
                />
            </div>
            <div className="home-row">
                <Product
                    id='6'
                    title='Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 3060 Laptop GPU, 15.6" Full HD 144Hz 3ms IPS Display, 16GB DDR4, 512GB NVMe SSD, WiFi 6, RGB Keyboard, PH315-53-71HN'
                    price={11.5}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/7183SjkrSnL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    );
};

export default Header;