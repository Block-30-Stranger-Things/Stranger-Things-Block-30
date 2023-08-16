import React from 'react'

export default function MyPosts({ posts }) {
    console.log(posts, "post from profile")

  return (
    <div>
        <h1>My Posts</h1>
        {posts.map((post, i) => {
            return (
           <div key={i}>
             <p>{post.title}</p>
              <p>{post.price}</p>
            </div>
            )
            
        })}


    </div>
    
  )
}
