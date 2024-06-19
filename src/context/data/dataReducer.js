import { actionsTypes } from "../../types";


export const dataReducer = (state, action) => {

    switch (action.type) {
        
        case actionsTypes.setPosts:
            return {
                ...state,
                posts: action.payload
            }

        case actionsTypes.createPost:
            return {
                ...state,
                posts: [ action.payload, ...state.posts ]
            }
    
        default:
            return state
    }

}