import { Link } from 'react-router-dom'
import { IoHeartOutline, IoHomeOutline } from 'react-icons/io5'
import { BiLogOut } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useAuth } from '../../hooks';
import { ModeToggle } from '@/components/shared/ModeToggle';


const menuItems = [
    { 
        path: '/', 
        icon: <IoHomeOutline size={20} />,
        title: 'Inicio', 
    },
    { 
        path: '/favoritos', 
        icon: <IoHeartOutline size={20} />,
        title: 'Favoritos', 
    },
    
]

export const Sidebar = () => {

    const { logout, user } = useAuth()

    return (
        <aside className="w-56 border-r h-screen pr-4 flex flex-col sticky top-0">
            <div className="flex items-center gap-2 mt-10">
                <Avatar className="h-11 w-11">
                    <AvatarImage src={ user.image } className="object-cover" />
                    <AvatarFallback className="font-bold text-slate-500">{ user.firstName[0].toUpperCase() }</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold leading-5">{`${user.firstName} ${ user.lastName }`}</p>
                    <p className="text-slate-400 leading-5">{ user.email }</p>
                </div>
            </div>
            <nav className="mt-8 flex-1 flex flex-col justify-between">
                <ul>
                    {
                        menuItems.map(({ title, path, icon }) => (
                            <li key={ path }>
                                <Link to={ path } className="flex items-center gap-2 py-2 px-4 hover:bg-slate-100 dark:hover:bg-gray-900 transition-colors rounded-md">
                                    { icon }
                                    <span>{ title }</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <ModeToggle />
                    <Button 
                        variant="link"
                        onClick={logout} 
                        className="mb-5 text-red-700 flex items-center gap-2"
                    >
                        <BiLogOut /> Salir
                    </Button>
                </div>
            </nav>
        </aside>
    )
}
