import React from 'react';

const Cart = () => {
    return (
      <div>
            <h5>Cart</h5>

            <table class="shop_table shop_table_responsive cart">
                <thead>
                    <tr>
                        <th class="product-remove">&nbsp;</th>
                        <th class="product-thumbnail">&nbsp;</th>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Total</th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="cart_item">

                        <td class="product-remove">
                            <a class="remove" href="#">×</a>
                        </td>

                        <td class="product-thumbnail">
                            <a href="#"><img width="180" height="180" src="/vite.svg" /></a>
                        </td>

                        <td data-title="Product" class="product-name">
                            <a href="#">Polo T-shirt</a>
                        </td>

                        <td data-title="Price" class="product-price">
                            <span class="amount">$1,999.00</span>
                        </td>

                        <td data-title="Quantity" class="product-quantity">
                            4
                        </td>

                        <td data-title="Total" class="product-subtotal">
                            <span class="amount">$1,999.00</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Cart;