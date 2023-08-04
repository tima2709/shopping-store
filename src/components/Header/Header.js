import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AuthLogOut} from "../../redux/Action/productAction";
import {useAuth} from "../../hooks/useAuth";

const Header = () => {
    const [search, setSearch] = useState('')
    const {isAuth, email} = useAuth()
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(AuthLogOut())
    }

    const handleSearch = () => {
        setSearch('')
    }
    return (
        <div className={'container'}
             style={{
                 paddingTop: '20px',
                 display: 'flex',
                 justifyContent: 'space-between'
             }}>
            <div>
                <Link to={'/'}><h2>logo</h2></Link>
            </div>
            <div>
                <Link to={'favorite/'}><h2>Favorites</h2></Link>
            </div>
            <div>
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}
                       placeholder={'Search...'}/>
                <Link to={`search/${search}`}>
                    <button onClick={handleSearch}>search</button>
                </Link>
                isAuth ? <button onClick={handleLogOut}>Log out {email}</button> : ''
                <Link to={'login'}><button>Sing In</button></Link>
                <Link to={'register'}><button>Sing Up</button></Link>

            </div>
        </div>
    );
};

export default Header;