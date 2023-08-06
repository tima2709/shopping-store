import React from 'react';
import ProductList from "../components/ProductList/ProductList";
import {useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const SearchPage = () => {
    const products = useSelector(state => state.products.products)
    const params = useParams().name

    const searchItem = () => {
        return (products.filter(el => el.title?.toLowerCase().includes(params)))
    }
    const {isAuth} = useAuth()

    const searchedItem = searchItem()
    return !isAuth ? (
        <div>
            {
                searchedItem.length ? <ProductList products={searchedItem} title={'Searched product'}/> : <h1>'Ничего не найдено'</h1>
            }
        </div>
    ) : (
        <Navigate to={'register'}/>
    );
};

export default SearchPage;