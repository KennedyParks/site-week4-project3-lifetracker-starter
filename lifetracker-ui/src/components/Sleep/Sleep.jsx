import "./Sleep.css";

import React from 'react'

export default function Sleep() {
  return (
    <div className="SleepPage">
    <div className="Banner">
      <h1>Sleep</h1>
    </div>
    <div className="content">
      <div className="SleepOverview">
        <div className="header">
          <h3>Overview</h3>
          <button className="BlueButton">Add Sleep</button>
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