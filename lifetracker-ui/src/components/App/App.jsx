
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import Register from "../Register/Register"
import Login from "../Login/Login.jsx"
import Activity from "../Activity/Activity"
import Exercise from "../Exercise/Exercise"
// import Portal from "../Portal/Portal"
import "./App.css"
import LoginForm from "../LoginForm/LoginForm"
import Nutrition from "../Nutrition/Nutrition"
import * as React from "react"

export default function App() {
  const [appState, setAppState] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar user={appState.user} setIsClicked={setIsClicked}/>
        <Routes>
          <Route path="/" element={<Home setAppState={setAppState} />} />
          <Route
            path="/login"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setIsClicked={setIsClicked}
                setAppState={setAppState}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAppState={setAppState}
              />
            }
          />
          <Route
            path="/activity"
            element={
              <Activity
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAppState={setAppState}
              />
            }
          />
          <Route
            path="/exercise"
            element={
              <Exercise
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAppState={setAppState}
              />
            }
          />
                    <Route
            path="/nutrition"
            element={
              <Nutrition
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAppState={setAppState}
              />
            }
          />
          <Route
            path="/nutrition/create"
            element={
              <LoginForm
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAppState={setAppState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



