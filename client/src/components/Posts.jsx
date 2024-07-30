import React, {useState} from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'


const DUMMY_POSTS = [
{
    id: '1',
    thumbnail: Thumbnail1,
    category: 'science',
    title: 'This is the title of the very first post.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, veritatis atque maxime excepturi dolore deleniti vel quae minus vitae fugit, tenetur tempora provident necessitatibus mollitia harum optio reprehenderit enim id.',
    authorID: 3
},
{
    id: '2',
    thumbnail: Thumbnail2,
    category: 'science',
    title: 'This is the title of the very second post.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, veritatis atque maxime excepturi dolore deleniti vel quae minus vitae fugit, tenetur tempora provident necessitatibus mollitia harum optio reprehenderit enim id.',
    authorID: 1
},
{
    id: '3',
    thumbnail: Thumbnail3,
    category: 'weather',
    title: 'This is the title of the very third post.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, veritatis atque maxime excepturi dolore deleniti vel quae minus vitae fugit, tenetur tempora provident necessitatibus mollitia harum optio reprehenderit enim id.',
    authorID: 13
},
{
    id: '4',
    thumbnail: Thumbnail4,
    category: 'farming',
    title: 'This is the title of the very last post.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, veritatis atque maxime excepturi dolore deleniti vel quae minus vitae fugit, tenetur tempora provident necessitatibus mollitia harum optio reprehenderit enim id.',
    authorID: 11
},
]

const Posts = () => {
    const [posts, setPosts] = useState (DUMMY_POSTS)
  return (
<section className="posts">
    {
        posts.map(({id, thumbnail, category, title, desc, authorID}) => 
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />)
    }
</section>  )
}

export default Posts
