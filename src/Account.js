import React from 'react';
import { useHistory } from "react-router-dom";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './Account.css'; // Importing the styles
import logo from './Logo.png'; // Import your logo

// For the Signup page
function SignUp() {
    const history = useHistory();

    const handleSubmit = () => {
        // Redirect to the main page
        history.push('/');
    }

    return (
        <div className="container">
            <div className="left-panel">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="right-panel">
                <div className="signup-box">
                    <h1>Sign Up</h1>
                    <div className="signup-field">
                        <label className="signup-label">Email</label>
                        <input type="email" />
                    </div>
                    <div className="signup-field">
                        <label className="signup-label">Password</label>
                        <input type="password" />
                    </div>
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

// For the Login page
function Login() {
    const history = useHistory();

    const handleSubmit = () => {
        // Redirect to the main page
        history.push('/');
    }

    return (
        <div>
            <h1>Login</h1>
            {/* Your form fields here */}
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

// Main Account component
const Account = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}/signup`} component={SignUp} />
            <Route exact path={`${path}/login`} component={Login} />
        </Switch>
    );
}

export default Account;
