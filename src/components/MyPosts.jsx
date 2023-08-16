import React from 'react'
import './Posts-Profile.css'

export default function MyPosts({ posts }) {
    console.log(posts, "post from profile")

    //delete button and select button
    function deleteMe() {
        alert("TBD, sorry I will work on this but I see what to do")
    }

    function selectMe() {
        alert("TBD, will work on this as well")
    }

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
             <p><em>Image URL: TBD, will work on this</em>{post.imgUrl}</p>

             <button className="delete-btn" type="button" onClick={deleteMe}>Delete Post</button>
             <button type="button" onClick={selectMe}>Select Post</button>
            </div>
            )
        })}
    </div>
  )
}






