import React, {useState} from 'react';

const Form = ({title, handleCLick}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            <input
                value={email}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder={'email'}
            />
            <input
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder={'password'}
            />
            <button
                onClick={() => handleCLick(email, password)}
            >
                {title}
            </button>
        </div>
    );
};

export default Form;