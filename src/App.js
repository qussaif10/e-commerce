import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Account from './Account';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Purchase from './Purchase';  // Import the Purchase component here
import './Navbar.css';

const MainApp = () => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(json => {
                const randomProducts = json.sort(() => 0.5 - Math.random()).slice(0, 5);
                setCartItems(randomProducts);
            })
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div className="app">
            {(location.pathname !== '/account/signup' && location.pathname !== '/account/login') && <Navbar />}
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/account" component={Account} />
                <Route path="/products/product_:id" component={ProductDetail} />
                <Route path="/cart" render={() => <Cart cartItems={cartItems} />} />
                <Route path="/purchase" component={Purchase} />  {/* Add this line */}
            </Switch>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <MainApp />
        </Router>
    );
};

export default App;
