import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Path to Navbar.js
import Products from './Products'; // Path to Products.js
import Account from './Account'; // Path to Account.js
import ProductDetail from './ProductDetail'; // Path to ProductDetail.js
import './Navbar.css'; // General App styling

const MainApp = () => {
    const location = useLocation();

    return (
        <div className="app">
            {(location.pathname !== '/account/signup' && location.pathname !== '/account/login') && <Navbar />}
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/account" component={Account} />
                <Route path="/Products/product_:id" component={ProductDetail} />
                {/* Add more routes here as needed */}
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
