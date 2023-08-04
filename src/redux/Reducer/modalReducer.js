import {DATA_MODAL, IS_MODAL_VISIBLE, VISIBLE_MODAL} from "../types/types";


const initialState = {
    data: [],
    isModalVisible: false
}

export const dataModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_MODAL:
            return {
                ...state, data: action.payload,
            }
        default: return state
    }
}
export const visibleModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case VISIBLE_MODAL:
            return {
                ...state, isModalVisible: action.payload,
            }
        default: return state
    }
}