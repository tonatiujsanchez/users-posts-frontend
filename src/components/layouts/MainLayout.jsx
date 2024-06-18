import PropTypes from 'prop-types'
import { Sidebar } from '@/components'


export const MainLayout = ({ children }) => {
    return (
        <div className="max-w-[55rem] mx-auto flex">
            <Sidebar />
            <main className="flex-1 py-4 px-10">
                { children }
            </main>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node
}