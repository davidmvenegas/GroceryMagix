import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'


function Landing() {
    return (
        <div className="landing-container">
            <nav className="landing-header">
                <h1 className="landing-header-title">Grocery Magi<span>x</span></h1>
                <ul className="landing-header-list">
                    <Link to="/home" class="landing-header-list-item1">Home</Link>
                    <Link to="/auth" class="landing-header-list-item2">Sign Up</Link>
                </ul>
            </nav>
            <div className="landing-content">
                <div className="landing-content-bx1">
                    <span className="landing-content-bx1-header">
                        <span>2.3+ Million Recipes</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/1261/1261163.png" alt="grocery_icon" />
                    </span>
                    <h1 className="landing-content-hero">
                        Technology is your only <span>unfair advantage</span>
                    </h1>
                    <p className="landing-content-hero-description">Save time with Grocery Magix by turning your favorite recipes into grocery lists in seconds</p>
                    <div className="landing-content-hero-footer">
                        <img src="https://cdn-icons-png.flaticon.com/512/134/134914.png" alt="chat_icon" />
                        <div className="landing-content-hero-footer-description-wrapper">
                            <div className="landing-content-hero-footer-description1">Need Inspiration?</div>
                            <div className="landing-content-hero-footer-description2">Easily discuss with others</div>
                            <div className="landing-content-hero-footer-description3">about their favorites</div>
                        </div>
                    </div>
                </div>
                <div className="landing-content-bx2">
                    <div className="landing-content-bx2-main">
                        <img src="https://www.roxstarfitness.com/wp-content/uploads/which-diet-is-best.jpg" alt="grocery_img" />
                    </div>
                    <div className="landing-content-bx2-1">
                        <img className="landing-content-bx2-img" src="https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg" alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-2">
                        <img className="landing-content-bx2-img" src="https://images.eatthismuch.com/site_media/img/395_ldementhon_471464da-daad-4a92-8b5d-7e9a6de898a8.png" alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-3">
                        <img className="landing-content-bx2-img" src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=" alt="list_icon" />
                    </div>
                    <div className="landing-content-bx2-4">
                        <img className="landing-content-bx2-img" src="https://image.freepik.com/free-photo/brussel-sprouts-white-wall_253984-3314.jpg" alt="list_icon" />
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
