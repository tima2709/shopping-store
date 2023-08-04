import React from 'react';
import {useSelector} from "react-redux";
import ProductList from "../components/ProductList/ProductList";

const CategoryPage = () => {
    const products = useSelector(state => state.categories.productsByCategory)

    return (
        <div>
            <ProductList products={products}/>
        </div>
    );
};

export default CategoryPage;