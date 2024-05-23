import React, { useState, useEffect } from "react";

const Cart = (props) => {
    const [total, setTotal] = useState(0.00);

    useEffect( () => {
        const cartTotal = () => {
            const prices = props.data.map((cartItem) => (parseFloat(cartItem.price.replace('$',''))))
            // console.log(prices)
            let totalPrice = 0.00;
            for (let price of prices) {
                // console.log("Price: ", price)
                totalPrice = totalPrice + price
                // console.log("Total Price: ", totalPrice)
            }
            setTotal(totalPrice)
        }
        cartTotal()
    }, [])
    const cartItem = (cartItem) =>{
        return (
            <tr>
                <p className="product-title">{cartItem.type}</p>
                <span className="amount">{cartItem.price}</span>
            </tr>
        );
    }
    return (
      <div>
            <h5>Cart</h5>

            <table class="shop_table shop_table_responsive cart">
                <thead>
                    
                    
                </thead>
                <tbody>
                    {props.data.map((cart)=>(cartItem(cart)))}
                </tbody>
                    <h1>Total Price: ${total}</h1>
            </table>
        </div>

    );
};

export default Cart;