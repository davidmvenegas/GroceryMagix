import React from 'react'
import { Link } from 'react-router-dom';
import './exit.css'

function Exit() {
    return (
        <div className='exit-page'>
            <div className="exit-page-content">
                <h1>You've Been Securely Logged Out</h1>
                <p>Thanks for Coming! Hope to see you again soon.</p>
                <Link to="/">
                    <button className='exit-page-btn'>Return Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Exit
