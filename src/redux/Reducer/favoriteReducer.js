import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from "../types/types";



const initialState = {
    favorite: []
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, action.payload]
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter(el => el.id !== action.payload.id)
            }
        default:
            return state
    }
}