import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { registerUser } from './API'

export default function Register({ setToken }) {
const [registerUsername, setRegisteredUsername] = useState("")
const [registerPassword, setRegisterPassword] = useState("");

function inputUserName(e) {
  setRegisteredUsername(e.target.value)
}

function inputPassword(e) {
  setRegisterPassword(e.target.value);
}

const handelSubmit = async (e) => {
  e.preventDefault();

  const result = await registerUser(registerUsername, registerPassword)
  // setToken(result.data.token)
  console.log(result)
  alert("Success, you are now a Registered Member!")
}

  return (
  <>
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

          <label className="register-label">
            Password: 
            <input type="password" 
            value={registerPassword} 
            onChange={inputPassword} 
            className="register-input"/>
          </label>

          <button onClick={handelSubmit}>Register</button>
         <p style={{color: "white", marginTop: "10px"}}>Already Have An Account?</p> 
         <div className="linkToLogin">Login</div>
        </form>
    </div>

 
 </>
    
  )
}
