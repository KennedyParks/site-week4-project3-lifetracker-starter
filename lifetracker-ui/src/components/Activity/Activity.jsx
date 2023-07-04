import "./Activity.css";

import React from "react";

export default function Activity() {
  return (
    <div className="ActivityPage">
      <div className="content">
        <div className="actions">
          <h2 className="heading"> Activity Feed</h2>
          <div className="buttons">
            <button className="goldButton">Add Exercise</button>
            <button className="blueButton">Log Sleep</button>
            <button className="aquaButton">Record Nutrition</button>
          </div>
        </div>
        <div className="stats">
          <div className="main">
            <div className="SummaryStatGold">
              <div className="background">
                <p>Total Exercise Minutes</p>
                <h1>0</h1>
                {/* Come back here */}
              </div>
            </div>
            <div className="SummaryStatPurple">
              <div className="background">
                <p>Avg Sleep Hours</p>
                <h1>0</h1>
                {/* Come back here */}
              </div>
            </div>
            <div className="SummaryStatAqua">
              <div className="background">
                <p>Avg Daily Calories</p>
                <h1>0</h1>
                {/* Come back here */}
              </div>
            </div>
          </div>
          <h4>More Stats</h4>
          <div className="more">
            <div className="SummaryStatTeal">
              <div className="background">
                <p>Maximum Hourly Calories</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStatOrange">
              <div className="background">
                <p>Avg Exercise Intensity</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStatRed">
              <div className="background">
                <p>Total Hours Slept</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}