import React, { useEffect } from "react";
import { useState } from "react";
import { login } from "./API";
import { useNavigate } from "react-router-dom";
import "./Home-Login.css";

export default function Login({ setToken }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //useNavigate
  const navigate = useNavigate();

  const inputtingUsername = (e) => {
    setUsername(e.target.value);
  };

  const inputtingPassword = (e) => {
    setPassword(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !password) {
      setError("Please enter both username and password");
    } else {
      setError("")
    }

    if (userName && password) {
      const result = await login(userName, password);

      if (result.success) {
        console.log("Login is successful");
        alert(`You are now logged in ${userName}! Welcome To Stranger Things For Sale!`);

        const token = result.data.token;
        localStorage.setItem("token", token);
        console.log(localStorage);
        setToken(token);

        navigate("/profile");
      } else {
        console.log(
          "Login failed. Incorrect username or password. Please try again"
        );
        alert(
          "Login is incorrect, please try again, or register if you don't have an account"
        );
      }
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-heading">Log In</h2>
        <form onSubmit={handelSubmit}>
          <label className="label-login">
            Username:
            <input
              value={userName}
              placeholder="Username"
              onChange={inputtingUsername}
              className="input-login"
            />
          </label>

          <label className="label-login">
            Password:
            <input
              value={password}
              type="password"
              placeholder="Enter Password"
              onChange={inputtingPassword}
              className="input-login"
            />
          </label>

          {error && <span className="error-message">{error}</span>}

          <button className="login-btn">Login</button>
        </form>
      </div>
    </>
  );
}
