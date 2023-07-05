import "./Exercise.css";

import React from "react";

export default function Exercise() {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Sleep</h1>
      </div>
      <div className="content">
        <div className="ExerciseOverview">
          <div className="header">
            <h3>Overview</h3>
            <button className="GoldButton">Add Exercise</button>
          </div>
          <div className="feed">
            <div className="empty">
              <h2>Nothing here yet</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}