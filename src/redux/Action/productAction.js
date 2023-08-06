import axios from "axios";
import {
    ADD_PRODUCT,
    ADD_TO_FAVORITE, AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER,
    DATA_MODAL,
    GET_CATEGORIES,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY, REMOVE_FROM_FAVORITE,
    VISIBLE_MODAL
} from "../types/types";
import {BASE_URL} from "../../utils/apiURL";


export const getProducts = () => {
    return(dispatch) => {
        axios.get(`${BASE_URL}products?offset=0&limit=30`)
            .then(({data}) => {
                dispatch({type: GET_PRODUCTS, payload: data})
            })
    }
}

export const addProducts = (newProduct) => {
    // newProduct.images = [newProduct.image];
    // delete newProduct.image;
    newProduct.images = ["https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/161.jpg"]
    console.log(newProduct, 'newProduct')
    return(dispatch) => {
        axios.post(`https://api.escuelajs.co/api/v1/products/`, newProduct)
            .then(({data}) => {
                console.log(data, 'data')
                dispatch({type: ADD_PRODUCT, payload: data})
            })
    }
}

export const addFavorite = (data) => {
    return {type: ADD_TO_FAVORITE, payload: data}
}

export const removeFavorite = (dataId) => {
    return{type: REMOVE_FROM_FAVORITE, payload: dataId}
}

export const getDataModal = (data) => {
    return(dispatch) => {
        dispatch({type: DATA_MODAL, payload: data})
    }
}

export const getVisibleData = (data) => {
    return(dispatch) => {
        dispatch({type: VISIBLE_MODAL, payload: data})
    }
}

export const getCategories = () => {
    return(dispatch) => {
        axios.get(`${BASE_URL}categories`)
            .then(({data}) => {
                dispatch({type: GET_CATEGORIES, payload: data.slice(0,8)})
            })
    }
}

export const getProductsByCategory = (id) => {
    return(dispatch) => {
        axios.get(`${BASE_URL}categories/${id}/products`)
            .then(({data}) => {
                dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: data})
            })
    }
}

export const AuthLogin = (data) => ({
    type: AUTH_LOGIN,
    payload: data
})

export const AuthRegister = (data) => ({
    type: AUTH_REGISTER,
    payload: data
})

export const AuthLogOut = () => ({
    type: AUTH_LOGOUT
})