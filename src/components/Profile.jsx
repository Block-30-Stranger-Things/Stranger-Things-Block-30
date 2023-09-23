import React, { useState, useEffect } from "react";
import { myData } from "./API";
import MyPosts from "./MyPosts";
import { useNavigate } from "react-router-dom";

export default function Profile({ token, userName }) {
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await myData(localStorage.token);
        setProfile(profileData.data);
        setPosts(profileData.data.posts);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  //log out
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    navigate("/login");
    alert("Logging out, see you next time !");
  }

  //get todays date
  function getDate() {
    document.getElementById("getTodaysDate").innerHTML = Date();
  }

  return (
    <>
      {token ? (
        <div className="profile-container">
          <h2 className="profile-heading">My Profile</h2>
          <div className="profile-info">
            <button onClick={getDate} className="date">
              Todays Date
            </button>
            <p>Welcome, {profile.username}!</p>
            <p>Messages: TBD Will Work On This {profile.messages}</p>
            <p>ID: {profile._id}</p>
            <p>Cohort: {profile.cohort}</p>
            <button className="logOut" type="button" onClick={logOut}>
              Log Out
            </button>
            <hr />
            <MyPosts posts={posts} />
          </div>
        </div>
      ) : (
        <div className="profile-container">
          <p>Please log in to view your profile.</p>
          <button onClick={() => navigate("/login")} className="login-btn">
            Log In
          </button>
        </div>
      )}
    </>
  );
}
