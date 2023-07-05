import React from "react";
import "./Navbar.css";


export default function Navbar({ isLoggedIn, setIsLoggedIn, setIsClicked }) {
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
            <a href={isLoggedIn ? "/activity" : "/activity"}>Activity</a>
          </li>
          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/activity" : "/excercise"}>Excercise</a>
          </li>

          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/activity" : "/login"}>Nutrition</a>
          </li>
          <li onClick={checkLogin}>
            <a href={isLoggedIn ? "/activity" : "/login"}>Sleep</a>
          </li>

          <li>
            <a href="/login">Login</a>
          </li>
          {isLoggedIn ? (
           <a href="/register">
           <li className="secondary btn" onClick={handleOnClick}>        
             <span> Sign out</span>     
           </li>
           </a>
        ) : (
            <a href="/register">
          <li className="secondary btn"  onClick={handleOnClick}>        
            <span> Sign Up</span>     
          </li>
          </a>
        )}
        </ul>
      </div>
    </div>
  );
}