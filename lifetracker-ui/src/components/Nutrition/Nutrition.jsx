import React from "react";
// import { createContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Nutrition.css";
import NutritionFeed from "../NutritionFeed/NutritionFeed";
import NutritionForm from "../NutritionForm/NutritionForm";

const Nutrition = () => {
  const [nutritions, setNutritions] = useState([]);
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="ExerciseOverview">
          <div className="header">
            <h3>Overview</h3>
            <Link to="/nutrition-form">
              <button className="Button outline small outline aqua">Record Nutrition</button>
            </Link>
            {/* <NutritionForm nutritions={nutritions} setNutritions={setNutritions} /> */}
          </div>
          <div className="feed">
            <div className="empty">
              <NutritionFeed nutritions={nutritions} setNutritions={setNutritions} />
              <h2>Nothing Here Yet.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;