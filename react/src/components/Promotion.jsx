import React from 'react';

const Promotion = (props) => {
    return (
      
        <div className="card">
            <div className="card bg-light">
                
                <div className="product-outer">
                    <div className="product-inner">
                        <span className="loop-product-categories"><a href="#" rel="tag">Casual Wears</a></span>
                        <a href="single-product.html">
                            <h3>Black Polo T-shirt</h3>
                            <div className="product-thumbnail">
                                <img src="assets/images/blank.gif" className="img-responsive" />
                            </div>
                        </a>

                        <div className="price-add-to-cart">
                            <span className="price">
                                <span className="quacks-price">
                                    <ins><span className="amount"> $1,999.00</span></ins>
                                    <del><span className="amount">$2,299.00</span></del>
                                    <span className="amount"> </span>
                                </span>
                            </span>
                            <a href="#" className="button add_to_cart_button">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Promotion;