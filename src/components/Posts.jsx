import React, { useState, useEffect } from 'react';
import { fetchAllPosts } from './API';
import SearchBar from './SearchBar';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {  
    const fetchPosts = async () => {
      const postsData = await fetchAllPosts();
      setPosts(postsData);
    }

    fetchPosts();
  }, []);

  const handleSearchInput = (query) => {
    setSearchQuery(query);
  };
  
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <p>Search for Posts: </p>
      <SearchBar value={searchQuery} onChange={handleSearchInput}/>

      {filteredPosts.map((post) => (
        <div key={post._id}>
          <h2>Title: {post.title}</h2>
          <p>Description: {post.description}</p>
          <p>Created At: {post.createdAt}</p>
        </div>
      ))}
    </div>
  )
}


