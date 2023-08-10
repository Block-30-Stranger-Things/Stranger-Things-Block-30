import React, { useState, useEffect } from 'react'
import { fetchAllPosts } from './API'

export default function Posts() {
const [posts, setPosts] = useState([])

useEffect(() => {  
    const fetchPosts = async () => {
      const postsData = await fetchAllPosts();
      setPosts(postsData);
    }

    fetchPosts();
  }, []);

    return (
        <div className="posts-container">
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                    <p>{posts.createdAt}</p>
                </div>
            ))}




        </div>
      )
    }
