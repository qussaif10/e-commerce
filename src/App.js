import React, { useState } from 'react';
import './App.css';
import websiteLogo from './Logo.png';
import accountIcon from './accountIcon.png';
import cartIcon from './cartIcon.png'; // Import the cart icon

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <nav className="navbar">
            <img src={websiteLogo} alt="Website Logo" className="website-logo"/>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button>Search</button>
            </div>
            <div className="icons-on-the-right">
            <img src={cartIcon} alt="Shopping Cart" className="cart-icon"/>
            <img src={accountIcon} alt="Account" className="account-icon"/>
            </div>
        </nav>
    );

};

export default Navbar;
