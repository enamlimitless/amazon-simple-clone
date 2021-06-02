import React from 'react';
import './Product.css';
const Product = ({ id, price, img, rating, title }) => {
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product-rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={img} alt="" />
            <button className="btn">Add To Basket</button>
        </div>
    );
};

export default Product;