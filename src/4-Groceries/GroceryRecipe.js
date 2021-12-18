import React from 'react'

function GroceryRecipe({recipe}) {
    return (
        <div className="g-body-recipe-wrapper">
            <h1>{recipe.recipeLabel}</h1>
            <img src={recipe.recipeImage} alt="Recipe Img" />
        </div>
    )
}

export default GroceryRecipe
