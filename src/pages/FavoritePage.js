import React from 'react';
import {useSelector} from "react-redux";
import ProductList from "../components/ProductList/ProductList";
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

const FavoritePage = () => {
    const {isAuth} = useAuth()

    const favoriteStore = useSelector(state => state.favorite.favorite)
    // console.log(favoriteStore, 'Page')

    return !isAuth ?  (
        <div>
            <ProductList products={favoriteStore} title={'Favorite products'}/>
        </div>
    ) : (
        <Navigate to={'register'}/>
    )
};

export default FavoritePage;