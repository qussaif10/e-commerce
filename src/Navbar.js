import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import websiteLogo from './Logo.png';
import accountIcon from './accountIcon.png';
import cartIcon from './cartIcon.png';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <nav className="navbar">
            <Link to="/">  {/* Add this line */}
                <img src={websiteLogo} alt="Website Logo" className="website-logo"/>
            </Link>  {/* Add this line */}
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
                <div>
                    <img src={cartIcon} alt="Shopping Cart" className="cart-icon"/>
                </div>
                <div>
                    <Link to="/account/signup">
                        <img src={accountIcon} alt="Account" className="account-icon"/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
