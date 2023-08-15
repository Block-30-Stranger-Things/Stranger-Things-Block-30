import React, { useState, useEffect } from 'react'
import { myData } from './API';

export default function Profile( {token }) {  //pass token 
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
    <h2>My Profile</h2>
    <p>{profile.username}</p>

  </>
  
 )
} 