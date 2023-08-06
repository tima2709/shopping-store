import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, getDataModal, getVisibleData, removeFavorite} from "../../redux/Action/productAction";
import ModalProduct from "../ModalProduct/ModalProduct";

const ProductList = ({products, title}) => {
    const dispatch = useDispatch()
    const {isModalVisible} = useSelector(state => state.visibleModal)



    const viewModalHandler = (data) => {
        dispatch(getDataModal(data))
        dispatch(getVisibleData(true))
    }

    const add = (el) => {
        const newFavorite = {...el, IsFavorite: true}
        dispatch(addFavorite(newFavorite))
        console.log(newFavorite, 'new')
    }

    const remove = (el) => {
        dispatch(removeFavorite(el))
    }


    return (
        <div className={'section'}>
            {isModalVisible && <ModalProduct add={add} remove={remove}/>}
            <div className={'container'}>
                <div>
                    <h3 className={'category-title'}>{title}</h3>
                </div>
                <div className={'product-items'}>
                    {
                        products?.map(el => (
                            <div
                                key={el.id}
                                className={'product-item'}
                            >
                                <div className="product-item-box">
                                    <div onClick={() => viewModalHandler(el)}
                                    >
                                        <div className={'product-item-img'}>
                                            <img src={el?.images[0]} alt=""/>
                                            <div className={'product-item-cat'}>
                                                {el?.category?.name}
                                            </div>
                                        </div>
                                        <div className={'product-item-body'}>
                                            <h6 className={'product-item-title'}>{el.title}</h6>
                                        </div>
                                        <h6>Price: {el.price} сом</h6>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductList;