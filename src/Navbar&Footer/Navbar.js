import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <header>
            <div className="header-container">
                <ul>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/auth">User</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
