import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

    function navigateToLogIn() {
        navigate('/login');
    }

    function navigateToRegister() {
        navigate('/register');
    }

  return (
    <div>
        <div className="our-bts">
          <button onClick={navigateToLogIn}>Already have an Account</button>
          <button onClick={navigateToRegister}>Register an Account</button>
        </div>

        <h1> Strange Things For Sale</h1>
        <img src="/images/strangeImage.jpg" className="strangeMainImage"/> 
    </div>
  )
}



