import React from 'react';
import Form from "../form/form";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from  'firebase/auth'
import {AuthLogin} from "../../redux/Action/productAction";


const SignIn = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user.email, 'user.email')
                dispatch(AuthLogin(user))
                navigate('/user')
            })
            .catch(console.error)
    }

    return (
        <>
            <Form
                title={'sign in '}
                handleCLick={handleLogin}
            />
        </>
    );
};

export default SignIn;