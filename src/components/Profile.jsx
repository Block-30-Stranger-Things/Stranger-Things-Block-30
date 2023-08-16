import React, { useState, useEffect } from 'react'
import { myData } from './API';

export default function Profile( {token }) {  
  const [profile, setProfile] = useState({})

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const profileData = await myData(token)
      setProfile(profileData.data)

    } catch (error) {
      console.error("Error:", error)
    }
  }

  fetchProfile()
}, [token])

console.log({profile})
  return (
    <>
     <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>

     <div className="profile-info">
       <p>Welcome, {profile.username}</p>
       <p>Title: {profile.messages}</p>
       <p>ID: {profile._id}</p>
      </div>
   </div>
  </>
  )
}



 
  









