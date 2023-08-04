import React from 'react';
import {Link} from "react-router-dom";
import SignIn from "../../components/sign-in";

const LoginPage = () => {
    return (
        <div>
            <h1>login</h1>
            <SignIn/>
            <p>or
                <Link to={'/register'}>
                    register
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;