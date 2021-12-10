import React from 'react'
import './savedrecipe.css'
import TrashIcon from '../Images/trash_icon.png'

function SavedRecipe({recipe, setUpdateSavedRecipes}) {
    let groceryCount = parseInt(recipe.ingredients).length
    // let groceryCount = ((JSON.parse(recipe.ingredients) != null) ? JSON.parse(recipe.ingredients) : 0)

    function handleDelete() {
        
    }

    return (
        <div className="recipes-content">
            <div className="recipes-content-1">
                <img src={recipe.recipeImage} alt="Recipe_Img" />
            </div>
            <div className="recipes-content-2">
                <h1>{recipe.recipeLabel}</h1>
                <div className="recipes-servings-wrapper">
                    <p>Servings:</p>
                    <div className="servings-btn-wrapper">
                        <button className="servings-btn-1">-</button>
                        <div className="servings-btn-count">{recipe.recipeYield}</div>
                        <button className="servings-btn-2">+</button>
                    </div>
                </div>
            </div>
            <div className="recipes-content-3">
                <div className="recipes-g-amount">
                    <h2>GROCERIES: </h2>
                    <span>{groceryCount}</span>
                </div>
                <img onClick={handleDelete} src={TrashIcon} alt="trash_icon" />
            </div>
        </div>
    )
}

export default SavedRecipe
