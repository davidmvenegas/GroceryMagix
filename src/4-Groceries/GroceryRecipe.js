import React from 'react'
import './groceryrecipe.css'

function GroceryRecipe({recipe}) {
    return (
        <a href={recipe.recipeLink} target={"_blank"} rel='noreferrer'>
        <div className="g-body-recipe-wrapper">
            <h1>{recipe.recipeLabel}</h1>
            <img src={recipe.recipeImage} alt="Recipe Img" />
        </div></a>
    )
}

export default GroceryRecipe
