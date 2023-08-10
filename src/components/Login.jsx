import React from 'react'
import { useState } from 'react'
import './Home-Login.css'

export default function Login() {
const [userName, setUsername] = useState("");
const [password, setPassword] = useState("");



  return (
    <>
      <div className="login-container">
        <h2>Log In</h2>
        <form>
          <label>
            Username: 
            <input value={userName} 
            placeholder="Username"/>
          </label>

          <label>
           Password: 
            <input 
            value={password} 
            type="password"
            placeholder="Enter Password"/>
          </label>

          <button className="login-btn">
            Login
          </button>
      </form>




      </div>
    </>
  )
}
