import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import Register from "./components/Register";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <section className="link-container">
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">Login</Link>
          <div className="logout-button"></div>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/newPost" element={<NewPost />} />
      </Routes>
    </>
  );
}

export default App;
