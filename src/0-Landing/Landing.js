import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'
import { useUserContext } from "../1-Auth/context/userContext";
import Sparkle from 'react-sparkle'
import FaviconGroceries from '../Images/favicon-groceries.png'
import MainLanding from '../Images/main-img-landing.jpg'
import Carrots from '../Images/carrots.jpg'
import Chicken from '../Images/Chicken.jpg'
import Potatoes from '../Images/potatoes.jpg'
import BrusselSprouts from '../Images/brussel-sprouts.jpg'


function Landing() {
    const { user } = useUserContext()
    let loggedIn = user ? '/home' : '/auth'

    return (
        <div className="landing-container">
            <Sparkle flickerSpeed={'slowest'} fadeOutSpeed={15} minSize={5} maxSize={20} overflowPx={100} />
            <nav className="landing-header">
                <h1 className="landing-header-title">Grocery Magi<span>x</span></h1>
                <ul className="landing-header-list">
                    <span className="landing-content-bx1-header">
                        <span>2.3+ Million Recipes</span>
                        <img src={FaviconGroceries} alt="grocery_icon" />
                    </span>
                </ul>
            </nav>
            <div className="landing-content">
                <div className="landing-content-bx1">
                    <h1 className="landing-content-hero">
                        Build your grocery list faster with a <span>little magic</span>
                    </h1>
                    <p className="landing-content-hero-description">Save time with Grocery Magix by turning your favorite recipes into grocery lists in seconds</p>
                    <Link to={loggedIn} className="landing-header-list-item2">Get Started</Link>
                </div>
                <div className="landing-content-bx2">
                    <div className="landing-content-bx2-main">
                        <img src={MainLanding} alt="grocery_img" />
                    </div>
                    <div className="landing-content-bx2-1">
                        <img className="landing-content-bx2-img" src={Carrots} alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-2">
                        <img className="landing-content-bx2-img" src={Chicken} alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-3">
                        <img className="landing-content-bx2-img" src={Potatoes} alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-4">
                        <img className="landing-content-bx2-img" src={BrusselSprouts} alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-footer">
                        <span className="landing-content-bx2-footer-span1">Powered by </span>
                        <span className="landing-content-bx2-footer-span2">Edamam</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
