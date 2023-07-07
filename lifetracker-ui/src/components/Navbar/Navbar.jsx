import React from "react";
import "./Navbar.css";


export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const checkLogin = () => {
    if (!isLoggedIn) {
      setIsClicked(true);
    }
  };

  const handleOnClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    // Remove the authentication status from localStorage
    localStorage.removeItem("isLoggedIn");
    // Redirect the user to the login page
    navigate("/login");
  };

  
  

  return (
    <div className="Navbar">
      <div className="content">
        <div className="logo">
          <a href="/">
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg"
              alt="logo"
            />
          </a>
        </div>
        <ul className="links">
          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/activity" : "/login"}>Activity</a>
          </li>
          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/exercise" : "/login"}>Excercise</a>
          </li>

          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/nutrition" : "/login"}>Nutrition</a>
          </li>
          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/sleep" : "/login"}>Sleep</a>
          </li>

          {isLoggedIn ? (
           <a href="/login">
           <button className="btn" onClick={handleSignOut}>
            Sign Out
          </button>
           </a>
        ) : (
          <>
          <li>
          <a href="/login">Login</a>
        </li>
            <a href="/register">
          <li className="secondary btn" >        
            <span> Sign Up</span>     
          </li>
          </a>
          </>
        )}
        </ul>
      </div>
    </div>
  );
}