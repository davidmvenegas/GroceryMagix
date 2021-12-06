import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import DishIcon from '../Images/dish_icon.png'
import UserIcon from '../Images/user_icon.png'
import SearchIcon from '../Images/search_icon.png'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-box-one">
                    <Link className="navbar-logo" to="/">Grocery Magi<span>x</span></Link>
                </div>
                <div className="navbar-box-two">
                    <form className="navbar-search">
                        <input type="text" placeholder="Search for recipes..." />
                        <button id="navbar-search-btn" type="submit"><img src={SearchIcon} alt="search_icon" /></button>
                    </form>
                </div>
                <div className="navbar-box-three">
                    <Link to="/recipes">
                        <div className="navbar-recipes-box">
                            <img src={DishIcon} alt="dish_icon" />
                            <p>0</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-box-four">
                    <Link to="/auth">
                        <img className="navbar-user" src={UserIcon} alt="user_icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
