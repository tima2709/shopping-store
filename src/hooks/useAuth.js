import {useSelector} from "react-redux";

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user.user)
    console.log(email, 'use.email')
    return {
        isAuth: !!email,
        email,
        id,
        token,
    }
}