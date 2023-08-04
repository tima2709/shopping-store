import React from 'react';
import {useSelector} from "react-redux";
import ProductList from "../components/ProductList/ProductList";
import Category from "../components/Category/Category";

const HomePage = () => {
    const products = useSelector(state => state.products.products)
    return (
        <div>
            <Category/>
            <ProductList products={products} title={'Our Products'}/>
        </div>
    );
};

export default HomePage;