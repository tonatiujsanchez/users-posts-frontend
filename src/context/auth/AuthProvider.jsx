import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext, authReducer } from './'
import { AUTH_STATUS, AUTH_STORAGE_KEY } from '../../constants'
import { appApi } from '../../apis'
import { actionsTypes } from '../../types'




export const AUTH_INITIAL_STATE = {
    status: AUTH_STATUS.checking,
    user: undefined,
}
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

    useEffect(() => {
        checkingAuth()
    }, [])

    const checkingAuth = async() => {
        try {
            const { data } = await appApi.get('/users/me')
            dispatch({ type: actionsTypes.authLogin, payload: data })

        } catch (error) {
            dispatch({ type: actionsTypes.authLogout })
            localStorage.removeItem( AUTH_STORAGE_KEY )
        }
    }

    const login = async ({ email, password }) => {
        try {

            const { data } = await appApi.post('/users/login', { email, password })
            const { token, user } = data

            localStorage.setItem( AUTH_STORAGE_KEY, token )
            dispatch({ type: actionsTypes.authLogin, payload: user })

        } catch (error) {
            console.log(error)
        }
    }

    const register = async({ firstName, lastName, email, password }) => {
        try {
            await appApi.post('/users', { 
                firstName, 
                lastName, 
                email, 
                password
            })
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.removeItem( AUTH_STORAGE_KEY )
        window.location.reload();
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logout,
            register
        }}>
            { children }
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
