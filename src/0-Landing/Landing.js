import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'

function Landing() {
    return (
        <div>
            <h1 className="placeholder2">LANDING PAGE</h1>
            <Link to="/home"><button>Home</button></Link>
                <br />
                <br />
                <br />
            <Link to="/auth"><button>GO TO AUTH</button></Link>
        </div>
    )
}

export default Landing
