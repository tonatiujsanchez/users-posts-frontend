import { AUTH_STATUS } from "../../constants"
import { actionsTypes } from "../../types"


export const authReducer = (state, action) => {
    
    switch (action.type) {
        
        case actionsTypes.authLogin:
            return {
                ...state,
                user: action.payload,
                status: AUTH_STATUS.authenticated
            }

        case actionsTypes.authLogout:
            return {
                ...state,
                user: undefined,
                status: AUTH_STATUS.notAuthenticated
            }

        default:
            return state
    }
}