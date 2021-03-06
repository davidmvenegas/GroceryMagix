import {React, useState} from 'react'
import { useUserContext } from "../1-Auth/context/userContext";
import { useRecipeContext } from '../RecipeContext'
import './recipe.css'
import TimeIcon from '../Images/time_icon.png'
import InfoIcon from '../Images/info_icon.png'

function Recipe(recipe) {
    const { user, db, collection, addDoc } = useUserContext()
    const { setUpdateSavedRecipes } = useRecipeContext()
    const [recipeAdded, setRecipeAdded] = useState(false)

    let recipeLabel = recipe.recipe.label
    let ingredientLines = recipe.recipe.ingredientLines
    let ingredients = recipe.recipe.ingredients
    let recipeCalories = recipe.recipe.calories
    let recipeYield = recipe.recipe.yield
    let recipeTime = recipe.recipe.totalTime
    let recipeLink = recipe.recipe.url
    let recipeImage = recipe.recipe.image

    async function addRecipeInfo() {
        try {
        await addDoc(collection(db, "recipes"), {
            ingredients: ingredients,
            recipeLabel: recipeLabel,
            recipeYield: recipeYield,
            recipeImage: recipeImage,
            recipeLink: recipeLink,
            userUID: user.uid,
        })
        setUpdateSavedRecipes(Math.random())
        setRecipeAdded(true)
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="home-recipe-card">
            <div className="home-recipe-card-text-container">
                <h1 className="home-recipe-card-title">{recipeLabel.length < 55 ? recipeLabel : recipeLabel.slice(0, 55)+"..."}</h1>
                <p className="home-recipe-card-description">{ingredientLines.join(" • ").slice(0, 180)+"..."}</p>
                <div className="home-recipe-card-details">
                    <p>Serves {recipeYield}</p>
                    <div className="home-recipe-card-seperator"></div>
                    <div className="home-recipe-card-details-time-container">
                        <img src={TimeIcon} alt="time_icon" />
                        <p>{((recipeTime === 0) || (recipeTime > 300)) ? 25 : recipeTime} min</p>
                    </div>
                    <div className="home-recipe-card-seperator"></div>
                    <p id="home-recipe-calories">{Math.trunc(recipeCalories/recipeYield)} Calories</p>
                </div>
                <a target="_blank" rel='noreferrer noopener' href={recipeLink}><img className="home-recipe-tooltip-icon" src={InfoIcon} alt="info_icon" /></a>
                {recipeAdded ? <button className="home-recipe-card-add-btn-added">ADDED!</button> : <button className="home-recipe-card-add-btn" onClick={() => (addRecipeInfo())}>ADD</button>}
            </div>
            <div className="home-recipe-card-image-wrapper">
                <div className="home-recipe-card-image">
                    <img src={recipeImage} alt="Recipe_Image" />
                </div>
            </div>
        </div>
    )
}

export default Recipe
