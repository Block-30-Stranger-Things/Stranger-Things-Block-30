import React from 'react'
import './Posts-Profile.css'

export default function MyPosts({ posts }) {
    console.log(posts, "post from profile")

  return (
    <div>
        <h2 className="myPosts">My Posts</h2>
        {posts.map((post, i) => {
            return (
           <div key={i}>
             <p><em>Title:</em> {post.title}</p>
             <p><em>Description:</em> {post.description}</p>
             <p><em>Price:</em> {post.price}</p>
             <p><em>Location</em> {post.location}</p>
             <p><em>Updated At:</em>{post.updatedAt}</p>
             <p><em>Cohort:</em>{post.cohort}</p>
             <p><em>Author:</em>{post.author}</p>
             <p><em>Image URL:</em>{post.imgUrl}</p>

             <button className="delete-btn" type="button">Delete Post</button>
             <button type="button">Select Post</button>


            </div>
            )
            
        })}


    </div>
    
  )
}
