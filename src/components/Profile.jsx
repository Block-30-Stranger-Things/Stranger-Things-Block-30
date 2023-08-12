import React, { useState, useEffect } from 'react'
import { myData } from './API';

export default function Profile( {token }) {  //pass token 
  const [profile, setProfile] = useState({})

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const profileData = await myData(token)
      setProfile(profileData.data.user)

    } catch (error) {
      console.error("Error:", error)
    }
  }

  fetchProfile()
}, [token])


return (
  <>
    <h2>My Profile</h2>

  </>
  
 )
} 