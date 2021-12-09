import React from 'react'
import './recipe.css'
import TimeIcon from '../Images/time_icon.png'
import InfoIcon from '../Images/info_icon.png'

function Recipe(recipe) {
    let timeArr = [15, 20, 30, 40, 45, 50, 60, 75]
    
    function addRecipeInfo() {
        console.log(recipe);
    }

    return (
        <div className="home-recipe-card">
            <div className="home-recipe-card-text-container">
                <h1 className="home-recipe-card-title">{recipe.recipe.label}</h1>
                <p className="home-recipe-card-description">{recipe.recipe.ingredientLines.join(" • ").slice(0, 180)+"..."}</p>
                <div className="home-recipe-card-details">
                    <p>Serves {recipe.recipe.yield}</p>
                    <div className="home-recipe-card-seperator"></div>
                    <div className="home-recipe-card-details-time-container">
                        <img src={TimeIcon} alt="time_icon" />
                        <p>{((recipe.recipe.totalTime === 0) || (recipe.recipe.totalTime > 300)) ? timeArr[Math.floor(Math.random() * timeArr.length)] : recipe.recipe.totalTime} min</p>
                    </div>
                    <div className="home-recipe-card-seperator"></div>
                    <p id="home-recipe-calories">{Math.trunc(recipe.recipe.calories/recipe.recipe.yield)} Calories</p>
                </div>
                <a target="_blank" rel='noreferrer noopener' href={recipe.recipe.url}><img className="home-recipe-tooltip-icon" src={InfoIcon} alt="info_icon" /></a>
                <button className="home-recipe-card-add-btn" onClick={() => (addRecipeInfo())}>ADD</button>
            </div>
            <div className="home-recipe-card-image-wrapper">
                <div className="home-recipe-card-image">
                    <img src={recipe.recipe.image} alt="Recipe_Image" />
                </div>
            </div>
        </div>
    )
}

export default Recipe
