import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, FavoritesPage } from '../pages'
import { AuthRoutes, PrivateRoutes } from './'


export const AppRoutes = () => {
    return (
        <Routes>
            {/* TODO: Proyect routes */}
            <Route element={ <AuthRoutes /> }>
                <Route path='/crear-cuenta' element={ <RegisterPage /> } />
                <Route path='/iniciar-sesion' element={ <LoginPage /> } />
            </Route>
            <Route element={ <PrivateRoutes /> } >
                <Route path='/' element={ <HomePage /> } />
                <Route path='/favoritos' element={ <FavoritesPage /> } />
            </Route>
        </Routes>
    )
}
