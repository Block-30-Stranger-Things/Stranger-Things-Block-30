import React from "react";
import "./css/Posts-Profile.css";

export default function MyPosts({ posts }) {
  function deletePost() {
    alert("TBD, will be able to delete soon");
  }

  function selectPost() {
    alert("TBD, will work on this as well");
  }

  return (
    <div className="">
      <h2 className="myPosts">My Posts</h2>
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          <p>
            <em>Title:</em> {post.title}
          </p>
          <p>
            <em>Description:</em> {post.description}
          </p>
          <p>
            <em>Price:</em> {post.price}
          </p>
          <p>
            <em>Location:</em> {post.location}
          </p>
          <p>
            <em>Updated At:</em> {post.updatedAt}
          </p>
          <p>
            <em>Cohort:</em> {post.cohort}
          </p>
          <p>
            <em>Author:</em> {post.author}
          </p>

          <div className="post-buttons">
            <button
              className="delete-btn"
              type="button"
              onClick={() => deletePost(post._id)}
            >
              Delete Post
            </button>
            <button type="button" onClick={() => selectPost(post._id)}>
              View Post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
