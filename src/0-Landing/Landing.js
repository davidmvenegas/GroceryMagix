import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'

function Landing() {
    return (
        <div>
            <h1 className="placeholder2">LANDING PAGE</h1>
            <Link to="/home"><button>Go to Home</button></Link>
        </div>
    )
}

export default Landing
