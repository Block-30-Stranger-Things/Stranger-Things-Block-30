import React from 'react'
import { useState } from 'react'

export default function Register() {
const [registerUsername, setRegisteredUsername] = useState("")
const [registerPassword, setRegisteredPassword] = useState("")

function inputUserName(e) {
  setRegisteredUsername(e.target.value)
}

function inputPassword(e) {
  setRegisteredPassword(e.target.value)
}

function handelSubmit() {
  e.preventDefault();
}


  return (
    <div className="register-container">
      <h2 className="register-heading">Register Account</h2>
        <form onSubmit={handelSubmit}>
          <label className="register-label">
            Username: 
            <input 
            type="text" 
            value={registerUsername} 
            onChange={inputUserName}
            className="register-input" />
          </label>

          <label className="resister-label">
            Password: 
            <input type="text" 
            value={registerPassword} 
            onChange={inputPassword} 
            className="register-input"/>
          </label>

          <button>Register</button>
        </form>
    </div>
  )
}
