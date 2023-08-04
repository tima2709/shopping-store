import React from 'react';
import ProductList from "../components/ProductList/ProductList";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const SearchPage = () => {
    const products = useSelector(state => state.products.products)
    const params = useParams().name

    const searchItem = () => {
        return (products.filter(el => el.title?.toLowerCase().includes(params)))
    }

    const searchedItem = searchItem()
    return (
        <div>
            {
                searchedItem.length ? <ProductList products={searchedItem} title={'Searched product'}/> : <h1>'Ничего не найдено'</h1>
            }
        </div>
    );
};

export default SearchPage;