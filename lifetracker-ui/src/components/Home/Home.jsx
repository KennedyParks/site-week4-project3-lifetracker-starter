import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
        <div className="hero">
            <img src='https://images.everydayhealth.com/images/consisten-exercise-helps-anxiety-and-stress-1440x810.jpg' alt="Hero image"/>
            <h1>Life Tracker</h1>
            <p>Track your progress and grow</p>
        </div>
        <div className="tiles">
            <div className="tile">
                <img src='http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg' alt="Fitness"/>
                <p>Fitness</p>
            </div>
            <div className="tile">
                <img src='	http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg' alt="Food"/>
                <p>Food</p>
            </div>
            <div className="tile">
                <img src='http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg' alt="Rest"/>
                <p>Rest</p>
            </div>
            <div className="tile">
                <img src='	http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg' alt="Planner"/>
                <p>Planner</p>
            </div>
        </div>

    </div>
  )
}