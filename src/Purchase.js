import React from 'react';
import './Purchase.css';
import MasterCardIcon from './mc_symbol_opt_45_1x.png';
import VisaIcon from './vecteezy_visa-logo-transparent-png_22100873_514.png';
import DHLIcon from './dhl.png';
import fedexIcon from './4373166_fedex_logo_logos_icon.png';

const Purchase = () => {
    const handleSubmit = () => {
        alert('Your purchase was successful!');
    };

    return (
        <div className="purchase-container">
            <div className="purchase-box">
                <h2>Payment Details</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" />

                    <label htmlFor="expDate">Expiration Date</label>
                    <input type="text" id="expDate" name="expDate" />

                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" />

                    <div className="payment-logos">
                        <img src={MasterCardIcon} alt="Mastercard" />
                        <img src={VisaIcon} alt="Visa" />
                    </div>

                    <div className="shipping-logos">
                        <img src={DHLIcon} alt="DHL" />
                        <img src={fedexIcon} alt="Fedex" />
                    </div>

                    <button type="submit">Continue Purchase</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;
