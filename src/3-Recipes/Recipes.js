import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './recipes.css'
import SavedRecipe from './SavedRecipe'
import { useUserContext } from "../1-Auth/context/userContext";

function Recipes() {
    const [savedRecipes, setSavedRecipes] = useState([])
    const [updateSavedRecipes, setUpdateSavedRecipes] = useState()
    const { user } = useUserContext();

    useEffect(() => {
        fetch(`http://localhost:9293/recipes/${user.uid}`)
        .then(r => r.json())
        .then((recipeData) => setSavedRecipes(recipeData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateSavedRecipes])

    console.log(savedRecipes);

    return (
        <div className="recipes-container">
            <div className="recipes-wrapper">
                <div className="recipes-box-1">
                    <div className="recipes-header">
                        <div className="recipes-title-wrapper">
                            <h1>My Recipes</h1>
                            <p id="recipes-remove-all">Remove all items</p>
                        </div>
                        <button><span>+</span><p>Create New List</p></button>
                    </div>
                        <div className="my-recipes-seperator"></div>
                            <div className="saved-recipe-wrapper">
                            {savedRecipes.map((recipe) => {
                                return <SavedRecipe recipe={recipe} setUpdateSavedRecipes={setUpdateSavedRecipes} />
                            })}
                            </div>
                        <div className="my-recipes-seperator"></div>
                    <div className="recipes-footer">
                        <h1>Total Groceries: <span>13</span></h1>
                    </div>
                </div>
                <div className="recipes-box-2">
                    <div className="recipes-shopping-list-wrapper">
                        <h1 className="recipes-shopping-lists-title">Shopping Lists (<span>5</span>)</h1>
                        <div className="recipes-shopping-lists-content-seperator"></div>
                        <div className="recipes-shopping-lists-container">
                            <Link id="recipes-list-item" to='/groceries'><h1>Week 1</h1></Link>
                            <h1>Week 2</h1>
                            <h1>Week 3</h1>
                            <h1>Week 4</h1>
                            <h1>Week 5</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes
