import PropTypes from 'prop-types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { IoHeartOutline } from 'react-icons/io5'
import { dateFormat } from '../../utils'


export const PostItem = ({ post }) => {
    return (
        <div className="flex gap-3 border rounded px-3 py-3 shadow-md">
            <div>
                <Avatar className="h-11 w-11">
                    <AvatarImage src="https://avatar.iran" className="object-cover" />
                    <AvatarFallback className="font-bold text-slate-500">{ post.userId }</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-1">
                <div className="flex justify-between w-full">
                    <p className="font-bold flex items-center gap-2">Name User <span className="text-sm opacity-30 font-light">{ dateFormat(post.createdAt) }</span></p>
                    <Button variant="ghost" className="" >
                        <IoHeartOutline size={20} />
                    </Button>
                </div>
                <p>{ post.post }</p>
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object
}