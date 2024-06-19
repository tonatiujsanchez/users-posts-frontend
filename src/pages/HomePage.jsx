import {  MainLayout, PostForm, PostList } from '@/components'
import { useData } from '../hooks'
import { useEffect } from 'react'

export const HomePage = () => {

    const { loadPosts, posts } = useData()
    const getPosts = async() => {
        await loadPosts()
    }

    useEffect(() => {
        getPosts()
    }, [])
    

    console.log(posts)

    return (
        <MainLayout>
            <PostForm />
            <div>
                <PostList posts={ posts } />
            </div>
        </MainLayout>
    )
}
