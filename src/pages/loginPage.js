import React from 'react';
import {Link} from "react-router-dom";
import SignIn from "../components/singIn/singIn";

const LoginPage = () => {
    return (
        <div className={'container'}>
            <h1>login</h1>
            <SignIn/>
            <p>or</p>
            <button><Link to={'/register'}>
                register
            </Link></button>
        </div>
    );
};

export default LoginPage;