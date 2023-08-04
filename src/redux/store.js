import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "./Reducer/productReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {dataModalReducer, visibleModalReducer} from "./Reducer/modalReducer";
import {categoriesReducer} from "./Reducer/categoryReducer";
import {favoriteReducer} from "./Reducer/favoriteReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    dataModal: dataModalReducer,
    visibleModal: visibleModalReducer,
    categories: categoriesReducer,
    favorite: favoriteReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))