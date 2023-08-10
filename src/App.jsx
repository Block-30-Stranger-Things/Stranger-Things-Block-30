import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Posts from './components/Posts'
import Register from './components/Register'
import NewPost from './components/NewPost'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
  <>
    <div className="link-container">
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Register />} />

      <Route path="/posts" element={<Posts />} />
        <Route path="/newPost" element={<NewPost />} />
    </Routes>
  </>
  )
}

export default App
