import React, { useState, useContext } from "react";
import "./loginpage.css";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(UserContext);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5001/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        const loggedInUser = data.userData;
        localStorage.setItem("id", loggedInUser.id);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        updateUser(loggedInUser);
        navigate("/home");
      } else {
        alert("Login Failed!");
      }
    } catch (error) {
      alert("Login failed: " + error);
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="welcome-text">Welcome to Mentor_Me🎓</h1>
        <div className="account-type">
          <div className="mentor"></div>
          <div className="mentee"></div>
        </div>
        <p className="welcome">Enter your Email and Password</p>
        <div className="user-information">
          <form action="" onSubmit={handleLogin}>
            <div className="user-email">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="user-password">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn-success">
              Log in
            </button>
            <p>You agree to our terms and policies</p>
            <Link to="/signup" className="create-account-btn">
              Create Account
            </Link>
          </form>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://www.genesecloud.academy/wp-content/uploads/2021/02/mentor-1.svg"
          alt="Mentorship"
        />
      </div>
    </div>
  );
}

export default Login;
