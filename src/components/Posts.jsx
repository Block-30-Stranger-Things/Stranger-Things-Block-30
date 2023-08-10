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
        <div>



        </div>
      )
    }
