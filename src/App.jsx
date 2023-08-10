import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Posts from './components/Posts'
import SignUp from './components/SignUp'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
  <>
    <div className="link-container">
      <div className="myLinks">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>
    </div>

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </>
  
  )
}

export default App
