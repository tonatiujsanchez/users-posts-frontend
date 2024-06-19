import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { appApi } from '../../apis'
import { DataContext, dataReducer } from "./"
import { actionsTypes } from '../../types'

export const AUTH_INITIAL_STATE = {
    posts: [],
}

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, AUTH_INITIAL_STATE)

    const loadPosts = async() => {

        try {
            const { data } = await appApi.get('/posts')
            dispatch({ type: actionsTypes.setPosts, payload: data })

        } catch (error) {
            console.log(error)
        }
    }

    const createPost = async({ post }) => {
        try {
            const { data } = await appApi.post('/posts', { post })
            dispatch({ type: actionsTypes.createPost, payload: data })
            return {
                error: false
            }
        } catch (error) {
            console.log(error)
            return {
                error: true
            }
        }
    }

    return (
        <DataContext.Provider value={{
            ...state,
            loadPosts,
            createPost
        }}>
            { children }
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node
}
