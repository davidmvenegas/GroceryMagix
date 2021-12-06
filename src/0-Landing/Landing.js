import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'

function Landing() {
    return (
        <div>
            <h2>LANDING PAGE</h2>
            <Link to="/home"><button>Go to Home</button></Link>
        </div>
    )
}

export default Landing
