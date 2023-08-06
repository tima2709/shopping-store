import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addProducts, AuthLogOut} from "../redux/Action/productAction";
import FavoritePage from "./FavoritePage";
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

const UserPage = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useDispatch()
    // console.log(email, 'email')
    // console.log(isAuth, 'auth')
    const [addProduct, setAddProduct] = useState({})
    const handleChange = (e) => {
        setAddProduct(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProducts(addProduct))
        console.log(addProduct, 'add')
    }




    return isAuth ? (
        <div className={'container'}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name={'title'}
                        id={'title'}
                        value={addProduct?.title}
                        placeholder={'title'}
                        onChange={(e) => setAddProduct({...addProduct, title: e.target.value})}
                    />
                </div>
                <div>
                    <input
                        type='number'
                        id={'price'}
                        value={addProduct?.price}
                        placeholder={'price'}
                        onChange={(e) => setAddProduct({...addProduct, price: e.target.value})}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id={'description'}
                        value={addProduct?.description}
                        placeholder={'description'}
                        onChange={(e) => setAddProduct({...addProduct, description: e.target.value})}
                    />
                </div>
                <div>
                    <input
                        type='number'
                        id={'categoryId'}
                        value={addProduct?.categoryId}
                        placeholder={'categoryId'}
                        onChange={(e) => setAddProduct({...addProduct, categoryId: e.target.value})}
                    />
                </div>
                <div>
                    <input
                        type="file"
                        id={'file'}
                        value={addProduct?.image}
                        placeholder={'image'}
                        onChange={handleChange}
                    />
                </div>
                <button type={'submit'}>Add product</button>
            </form>
            <div>
                <FavoritePage/>
            </div>
            <div>
                <button onClick={() => dispatch(AuthLogOut())}>log out from {email}</button>
            </div>
        </div>
    ) : (
        <Navigate to={'/login'}/>
    )
};

export default UserPage;