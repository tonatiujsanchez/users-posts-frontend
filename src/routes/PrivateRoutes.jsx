import { Navigate, Outlet } from 'react-router-dom'
// import { MainLoader } from '../components' // TODO: Create component
import { useAuth } from '../hooks'
import { AUTH_STATUS } from '../constants'



export const PrivateRoutes = () => {

    const { status } = useAuth()

    if( status === AUTH_STATUS.checking ) {
        return (
            <div className="main-loader__content">
                {/* <MainLoader /> */}
                cargando...

            </div>
        )
    }

    return (
        status === AUTH_STATUS.authenticated 
        ? <Outlet /> 
        : <Navigate to="/iniciar-sesion" />
    )
}
