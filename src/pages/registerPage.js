import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../../components/sign-up";

const RegisterPage = () => {
    return (
        <div>
            <h1>register</h1>
            <SignUp/>
            <p>or
                <Link to={'/login'}>
                    login
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;