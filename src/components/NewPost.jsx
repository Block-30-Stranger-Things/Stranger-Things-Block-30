import React from 'react'
import  { useState } from 'react'
import './NewPost.css'
import { makePost } from './API'

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
            
            <button type="submit">Add Post</button>
        </form>
    </div>
  )
}

