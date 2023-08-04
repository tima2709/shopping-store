import {GET_CATEGORIES, GET_PRODUCTS_BY_CATEGORY} from "../types/types";


const initialState = {
    categories: [],
    productsByCategory: [],
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_CATEGORIES:
            return {...state, categories: action.payload}
        case GET_PRODUCTS_BY_CATEGORY:
            return {...state, productsByCategory: action.payload}
        default: return state
    }
}

// export const productsByCategory = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_PRODUCTS_BY_CATEGORY:
//             return {...state, productsByCategory: action.payload}
//
//     }
// }

