import React from 'react';
import {Link } from "react-router-dom";

const Product = (props) => {

    return (
      
        <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
                
                <div className="card-body" >
                    <div className="product-inner">
                        <span className="upper-container">
                            <p className="product-title">{props.data.type}</p>
                            <p className="product-title">{props.data.size}</p>
                            <p className="product-title">{props.data.color}</p>
                            <p className="product-title">{props.data.material}</p>
                            <div className="product-image">
                                <img src="/vite.svg" />
                            </div>
                        </span>
                        <div className="price-add-to-cart">
                            <span className="price">
                                <span className="quacks-price">
                                    <span className="amount">{props.data.price}</span>
                                </span>
                            </span>
                            <span>
                            <Link onClick = {()=> props.addToCart( props.data)}>
                                <img className="cart-icon ml-2" src="/add-to-cart.png" />
                            </Link>
                               
                            </span>
                        </div>
                    </div>
                </div>
        </div>


    );
};

export default Product;