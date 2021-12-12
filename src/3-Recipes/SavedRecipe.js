import React, { useState } from 'react'
import './savedrecipe.css'
import { useUserContext } from "../1-Auth/context/userContext";
import { useRecipeContext } from '../RecipeContext';
import TrashIcon from '../Images/trash_icon.png'

function SavedRecipe({recipe}) {
    const { db, doc, deleteDoc, updateDoc, increment } = useUserContext()
    const { setUpdateSavedRecipes } = useRecipeContext()
    let groceryCount = recipe.ingredients.length
    const [isDown, setIsDown] = useState(true)

    const handleDelete = async (recipe) => {
        await deleteDoc(doc(db, "recipes", recipe))
        await setUpdateSavedRecipes(Math.random())
    }

    const incrementedIngredients = recipe.ingredients.map((hash) => {
        return {...hash, quantity: (hash.quantity + (hash.quantity / recipe.recipeYield))}
    })
    const decrementedIngredients = recipe.ingredients.map((hash) => {
        return {...hash, quantity: (hash.quantity - (hash.quantity / recipe.recipeYield))}
    })

    const increaseRecipe = async () => {
        const recipeRef = doc(db, "recipes", recipe.id)
        await updateDoc(recipeRef, {
            recipeYield : increment(1),
            ingredients : incrementedIngredients,
        })
        await setUpdateSavedRecipes(Math.random())
    }
    const decrementRecipe = async () => {
        const recipeRef = doc(db, "recipes", recipe.id)
        await updateDoc(recipeRef, {
            recipeYield : increment(-1),
            ingredients : decrementedIngredients,
        })
        await setUpdateSavedRecipes(Math.random())
    }

    function handleDropdown() {
        setIsDown(!isDown)
    }

    return (
        <div className="recipes-content">
            <div className="recipes-content-1">
                <img src={recipe.recipeImage} alt="Recipe_Img" />
            </div>
            <div className="recipes-content-2">
                <a className="recipes-content-2-link" href={recipe.recipeLink} target={"_blank"} rel={"noreferrer"}><h1 className="recipes-content-2-title">{recipe.recipeLabel}</h1></a>
                <div className="recipes-servings-wrapper">
                    <p>Servings:</p>
                    <div className="servings-btn-wrapper">
                        <button style={recipe.recipeYield < 2 ? {opacity : .5, backgroundColor: "#ddd", pointerEvents: "none" } : {opacity : 1, pointerEvents: "all" }} onClick={decrementRecipe} className="servings-btn-1">-</button>
                        <div className="servings-btn-count">{recipe.recipeYield}</div>
                        <button onClick={increaseRecipe} className="servings-btn-2">+</button>
                    </div>
                </div>
            </div>
            <div className="recipes-content-3">
                <div className="recipes-g-amount">
                    <div onClick={handleDropdown} className="recipes-g-dropdown">
                        <p>&#9432;</p>
                        <div style={isDown ? {display: "none", visibility: "hidden" } : {display: "block", visibility: "visible"}} className="recipes-g-dropdown-wrapper">
                            <div className="recipes-g-dropdown-content">
                                <ul>
                                    {recipe.ingredients.map((grocery, i) => (
                                        (i !== recipe.ingredients.length - 1) ? <li>{grocery.food}<br />•</li> : <li>{grocery.food}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2>GROCERIES:</h2>
                    <span>{groceryCount}</span>
                </div>
                <img onClick={() => handleDelete(recipe.id)} src={TrashIcon} alt="trash_icon" />
            </div>
        </div>
    )
}

export default SavedRecipe
