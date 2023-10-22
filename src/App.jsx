import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import Register from './components/Register'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  function logOut() {
    navigate("/login")
  }

  return (
  <>
    <div className="link-container">
      <button className="logOutOnNav" onClick={logOut}>Log Out</button>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
      <Route path="/profile" element={<Profile token={token}/> }/>

      <Route path="/posts" element={<Posts />} />
        <Route path="/newPost" element={<NewPost />} />
    </Routes>
  </>
  )
}

export default App



