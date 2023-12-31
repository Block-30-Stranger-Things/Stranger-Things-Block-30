import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "./API";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Posts-Profile.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await fetchAllPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const handleSearchInput = (query) => {
    setSearchQuery(query);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //navigate
  const navigate = useNavigate();

  function navigateToNewPost() {
    navigate("../newPost");
  }

  //get todays date
  function getDate() {
    document.getElementById("getTodaysDate").innerHTML = Date();
  }

  return (
    <div className="posts-container">
      <h2 className="post-heading">Posts</h2>
      <p className="search">Search for Posts: </p>

      <SearchBar value={searchQuery} onChange={handleSearchInput} />

      <button onClick={getDate} className="date" id="getTodaysDate">
        Todays Date
      </button>

      <button className="newPost" onClick={navigateToNewPost}>
        Add New Post
      </button>

      {filteredPosts.map((post) => (
        <div key={post._id}>
          <h2 className="title-heading">Title: {post.title}</h2>
          <p>Description: {post.description}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>
          <p>Created At: {post.createdAt}</p>
          <p>Updated At: {post.updatedAt}</p>
          <p>Cohort: {post.cohort}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
