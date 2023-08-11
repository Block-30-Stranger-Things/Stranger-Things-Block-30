import React, { useState, useEffect } from 'react'
import { registerUser } from './API'

export default function Register({token}) {
const [registerUsername, setRegisteredUsername] = useState("")
const [registerPassword, setRegisterPassword] = useState("");

function inputUserName(e) {
  setRegisteredUsername(e.target.value)
}

function inputPassword(e) {
  setRegisterPassword(e.target.value);
}

function handelSubmit(e) {
  e.preventDefault();
}

useEffect(() => {  
  const getRegistered = async () => {
    const result = await registerUser();
    console.log(result)
  }

  getRegistered();
}, []);  //do we need something here? 


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

          <label className="resister-label">
            Password: 
            <input type="password" 
            value={registerPassword} 
            onChange={inputPassword} 
            className="register-input"/>
          </label>

          <button onClick={handelSubmit}>Register</button>
        </form>
    </div>

 
 </>
    
  )
}
