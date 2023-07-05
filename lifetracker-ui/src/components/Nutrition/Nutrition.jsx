import "./Nutrition.css";
import React from 'react'
import {useNavigate} from "react-router-dom"
export default function Nutrition() {
    const navigate = useNavigate();

   const handleOnClick =  (event) => {
    event.preventDefault();
    navigate("/nutrition/create")
   }
  return (
    <div className="NutritionPage">
        <div className="Banner">
            <h1>Nutrition</h1>
        </div>
        <div className="content">
            <div className="NutritionOverview">
                <div className="header">
                    <h3>Overview</h3>
                    <button className="BlueButton" onClick={handleOnClick}>Record Nutrition</button>
                </div>
                <div className="feed">
                    <div className="empty">
                        <h2>Nothing here yet</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}