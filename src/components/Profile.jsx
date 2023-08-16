import React, { useState, useEffect } from 'react'
import { myData } from './API';
import MyPosts from './MyPosts';

export default function Profile( {token }) {  
  const [profile, setProfile] = useState({})
  const [posts, setPosts] = useState([])

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const profileData = await myData(localStorage.token)
      setProfile(profileData.data)
      setPosts(profileData.data.posts)

    } catch (error) {
      console.error("Error:", error)
    }
  }

  fetchProfile()
}, [token])

  return (
    <>
     <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>

     <div className="profile-info">  
       <p>Welcome, {profile.username}</p>
       <p>Messages: TBD Will Work On This {profile.messages}</p>
       <p>ID: {profile._id}</p>  

      <hr />
      <MyPosts posts={posts} />
      </div>
   </div>
  </>
  )
}



 
  









