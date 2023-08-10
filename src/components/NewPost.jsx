import React from 'react'
import  { useState } from 'react'
import { makePost } from './API'
import { useNavigate } from 'react-router-dom'
import './NewPost.css'

export default function NewPost() {
const [newPostData, setNewPostData] = useState( {
    title: "",
    description: "",
    price: "",
    location: "",
})

const [token, setToken] = useState(null);

const handelToken = (newToken) => {
    setToken(newToken);
}

const handelSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await makePost(newPostData)
        console.log(response)
    } catch (error) {
        console.error(error);
    }
} 

//navigate back to posts
const navigate = useNavigate();

function backToPosts() {
  navigate('../posts');
}

  return (
    <div className="newPost-container">
        <h2 className="newPost-heading">Add a New Post</h2>

        <form onSubmit={handelSubmit}>
            <label>
                Title: 
                <input
                 value={newPostData.title}
                 onChange={(e) => setNewPostData({...newPostData, title: e.target.value})} />
            </label>

            <label>
                Description: 
                <input
                 value={newPostData.description}
                 onChange={(e) => setNewPostData({...newPostData, description: e.target.value})} />
            </label>

            <label>
                Price: 
                <input
                 value={newPostData.price}
                 onChange={(e) => setNewPostData({...newPostData, price: e.target.value})} />
            </label>

            <label>
               Location: 
               <input
                 value={newPostData.location}
                 onChange={(e) => setNewPostData({...newPostData, location: e.target.value})} />
            </label>
            
           <div className="our-bts">
             <button type="submit">Add Post</button>
             <button type="submit" onClick={backToPosts}>Back To Posts</button>
           </div>
        </form>
    </div>
  )
}

