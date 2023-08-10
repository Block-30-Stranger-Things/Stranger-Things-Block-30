import React from 'react'
import { useState } from 'react'
import './Home-Login.css'

export default function Login() {
const [userName, setUsername] = useState("");
const [password, setPassword] = useState("");

const inputtingUsername = (e) => {
    setUsername(e.target.value);
}

const inputtingPassword = (e) => {
    setPassword(e.target.value);
}

const handelSubmit = (e) => {
    e.preventDefault();
}

  return (
    <>
      <div className="login-container">
        <h2 className="login-heading">Log In</h2>
        <form onSubmit={handelSubmit}>
          <label className="label-login">
            Username: 
            <input value={userName} 
            placeholder="Username"
            onChange={inputtingUsername}
            className="input-login"/>
          </label>

          <label className="label-login">
           Password: 
            <input 
            value={password} 
            type="password"
            placeholder="Enter Password"
            onChange={inputtingPassword}
            className="input-login"/>
          </label>

          <button className="login-btn">
            Login
          </button>
      </form>
      </div>
    </>
  )
}


