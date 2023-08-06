import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    const [search, setSearch] = useState('')

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
                <Link to={'login'}><button>Sing In</button></Link>
                <Link to={'register'}><button>Sing Up</button></Link>
                <Link to={'user'}><button>User</button></Link>

            </div>
        </div>
    );
};

export default Header;