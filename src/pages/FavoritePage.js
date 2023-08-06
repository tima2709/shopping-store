import React from 'react';
import {useSelector} from "react-redux";
import ProductList from "../components/ProductList/ProductList";


const FavoritePage = () => {


    const favoriteStore = useSelector(state => state.favorite.favorite)
    // console.log(favoriteStore, 'Page')

    return (
        <div>
            <ProductList products={favoriteStore} title={'Favorite products'}/>
        </div>
    )
};

export default FavoritePage;