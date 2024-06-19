import PropTypes from 'prop-types'
import { PostItem } from '@/components'

export const PostList = ({ posts }) => {
    return (
        <div className="flex flex-col gap-5 py-10">
            { posts.map( post =>(
                <PostItem key={ post.id } post={ post } />
            )) }
        </div>
    )
}


PostList.propTypes = {
    posts: PropTypes.array
}