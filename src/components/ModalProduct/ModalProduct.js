import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getVisibleData} from "../../redux/Action/productAction";

const ModalProduct = () => {
    const dispatch = useDispatch()
    const {data: el} = useSelector(state => state.dataModal)

    return (
        <div className={'overlay'}>
            <div className={'product-details-modal'}>
                <button onClick={() => dispatch(getVisibleData(false))}
                        className={'close-modal-btn'}
                >
                    X
                </button>
                <div className={'details-content'}>
                    <div className={'details-img'}>
                        <img src={el.images[0]} alt=""/>
                    </div>
                    <div className={'details-right'}>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <div>
                            Price: {el.price} Сом
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProduct;