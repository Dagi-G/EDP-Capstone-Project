import React from 'react';

const Product = (props) => {
    return (
      
        <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
                
                <div className="card-body" >
                    <div className="product-inner">
                        <span className="upper-container">
                            <p className="product-title">{props.data.Type}</p>
                            <div className="product-image">
                                <img src="/vite.svg" />
                            </div>
                        </span>
                        <div className="price-add-to-cart">
                            <span className="price">
                                <span className="quacks-price">
                                    <span className="amount"> $1,999.00</span>
                                </span>
                            </span>
                            <span>
                                <img className="add-to-cart-icon" src="/add-to-cart.png" />
                            </span>
                        </div>
                    </div>
                </div>
        </div>


    );
};

export default Product;