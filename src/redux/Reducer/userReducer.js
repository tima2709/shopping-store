import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER} from "../types/types";


const initialState = {
    email: null,
    token: null,
    id: null,
}

export default  function UserReducer(state = initialState, action ) {
    switch (action.type){
        case AUTH_LOGIN:
            return {...state, user: {
                    email: action.payload.email,
                    token: action.payload.accessToken,
                    id: action.payload.uid
                }}
        case AUTH_REGISTER:
            return {...state, user: {
                    email: action.payload.email,
                    token: action.payload.accessToken,
                    id: action.payload.uid
                }}
        case AUTH_LOGOUT:
            return {...state, user: {
                    email: null,
                    token: null,
                    id: null
                }}
        default:
            return state
    }
}