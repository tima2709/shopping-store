import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategory} from "../../redux/Action/productAction";
import {Link} from "react-router-dom";

const Category = () => {
    const categories = useSelector(state => state.categories.categories)
    // console.log(categories)
    const dispatch = useDispatch()

    const categoryClick = (id) => {
        dispatch(getProductsByCategory(id))
    }

    return (
        <div className={'container'}>
            <div className={'category-content'}>
                <div>
                    <h3 className={'category-title'}>Category</h3>
                </div>
                <div className={'category-items'}>
                    {
                        categories.map(item => (
                            <Link to={`/category/${item.id}`} key={item.id} onClick={() => categoryClick(item.id)} className={'category-item'}>
                                <div className={'category-item-box'}>
                                    <div className={'category-item-img'}>
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <div className={'category-item-name'}>
                                        <h6>{item.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;