import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
    const history = useHistory();
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = total * 0.1;
    const roundedTotal = Math.ceil(total + shipping);

    const handlePurchase = () => {
        history.push('/purchase');
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
                        <span>{item.title} - ${item.price}</span>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="cart-total">Total: ${total}</div>
                <div className="cart-shipping">Shipping: ${shipping.toFixed(2)}</div>
                <div className="cart-grand-total">Grand Total: ${roundedTotal}</div>
            </div>
            <button onClick={handlePurchase}>Purchase Items</button>
        </div>
    );
};

export default Cart;
