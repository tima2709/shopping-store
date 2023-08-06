import React from 'react';
import Form from "../form/form";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {AuthRegister} from "../../redux/Action/productAction";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(AuthRegister(user))
                navigate('/login')
            })
            .catch(console.error)
    }


    return (
        <>
            <Form
                title={'register'}
                handleCLick={handleRegister}
            />
        </>
    );
};

export default SignUp;