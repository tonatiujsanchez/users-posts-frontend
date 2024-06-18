import PropTypes from 'prop-types'


export const AuthLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-contain bg-no-repeat">
            <div className="hidden md:flex justify-center items-center h-screen">
            </div>
            <main className="flex justify-center items-center h-screen bg-slate-50 dark:bg-neutral-950">
                { children }
            </main>
        </div>
    )
}


AuthLayout.propTypes = {
    children: PropTypes.node
}