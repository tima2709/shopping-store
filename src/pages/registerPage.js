import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/singUp/singUp";

const RegisterPage = () => {
    return (
        <div className={'container'}>
            <h1>register</h1>
            <SignUp/>
            <p>or</p> <button><Link to={'/login'}>
            login
        </Link></button>
        </div>
    );
};

export default RegisterPage;