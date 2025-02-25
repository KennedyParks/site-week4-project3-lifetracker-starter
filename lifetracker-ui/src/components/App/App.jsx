import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import Register from "../Register/Register"
import Login from "../Login/Login.jsx"
import Activity from "../Activity/Activity"
import Exercise from "../Exercise/Exercise"
import "./App.css"
import LoginForm from "../LoginForm/LoginForm"
import Nutrition from "../Nutrition/Nutrition"
import NutritionForm from "../NutritionForm/NutritionForm"
import Sleep from "../Sleep/Sleep"
import * as React from "react"

export default function App() {
  const [appState, setAppState] = useState({})
  const [isClicked, setIsClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedAuthStatus = localStorage.getItem("isLoggedIn");
    return storedAuthStatus === "true";
  });

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn}/>
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
          <Route
            path="/sleep"
            element={
              <Sleep
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAppState={setAppState}
              />
            }
          />
          <Route path="/nutrition-form" 
          element={<NutritionForm />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}








// import { useState } from "react"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "../Home/Home"
// import Navbar from "../Navbar/Navbar"
// import Register from "../Register/Register"
// import Login from "../Login/Login.jsx"
// import Activity from "../Activity/Activity"
// import Exercise from "../Exercise/Exercise"
// import "./App.css"
// import LoginForm from "../LoginForm/LoginForm"
// import Nutrition from "../Nutrition/Nutrition"
// import Sleep from "../Sleep/Sleep"
// import * as React from "react"

// export default function App() {
//   const [appState, setAppState] = useState({})
//   const [isClicked, setIsClicked] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const storedAuthStatus = localStorage.getItem("isLoggedIn");
//     return storedAuthStatus === "true";
//   });

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar isLoggedIn={isLoggedIn}/>
//         <Routes>
//           <Route path="/" element={<Home setAppState={setAppState} />} />
//           <Route
//             path="/login"
//             element={
//               <Login
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setIsClicked={setIsClicked}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <Register
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           <Route
//             path="/activity"
//             element={
//               <Activity
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           <Route
//             path="/exercise"
//             element={
//               <Exercise
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//                     <Route
//             path="/nutrition"
//             element={
//               <Nutrition
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           <Route
//             path="/nutrition/create"
//             element={
//               <LoginForm
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           <Route
//             path="/sleep"
//             element={
//               <Sleep
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }









// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../Home/Home";
// import Navbar from "../Navbar/Navbar";
// import Register from "../Register/Register";
// import Login from "../Login/Login.jsx";
// import Activity from "../Activity/Activity";
// import Exercise from "../Exercise/Exercise";
// import "./App.css";
// import LoginForm from "../LoginForm/LoginForm";
// import Nutrition from "../Nutrition/Nutrition";
// import Sleep from "../Sleep/Sleep";
// import * as React from "react";

// export default function App() {
//   const [appState, setAppState] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar isLoggedIn={isLoggedIn} />
//         <Routes>
//           <Route path="/" element={<Home setAppState={setAppState} />} />
//           <Route
//             path="/login"
//             element={
//               <Login
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setIsClicked={setIsClicked}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <Register
//                 isLoggedIn={isLoggedIn}
//                 setIsLoggedIn={setIsLoggedIn}
//                 setAppState={setAppState}
//               />
//             }
//           />
//           {isLoggedIn && (
//             <>
//               <Route
//                 path="/activity"
//                 element={<Activity />}
//               />
//               <Route
//                 path="/exercise"
//                 element={<Exercise />}
//               />
//               <Route
//                 path="/nutrition"
//                 element={<Nutrition />}
//               />
//               <Route
//                 path="/sleep"
//                 element={<Sleep />}
//               />
//             </>
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
