import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from "../1-Auth/context/userContext";
import { useRecipeContext } from '../RecipeContext';
import './recipes.css'
import SavedRecipe from './SavedRecipe'
import HungryGif from '../Images/hungry_gif.gif'

function Recipes() {
    const { db, collection, user, doc, getDocs, deleteDoc, query, where } = useUserContext()
    const { updateSavedRecipes, setUpdateSavedRecipes } = useRecipeContext()
    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
        const queryRecipes = async () => {
            const recipeRef = await collection(db, "recipes")
                const q = await query(recipeRef, where("userUID", "==", user.uid))
                const snapshot = await getDocs(q)
                const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
                setSavedRecipes(results)
        }
        queryRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateSavedRecipes])

        const handleDeleteAll = async () => {
            const recipeRefs = collection(db, "recipes")
            const q = query(recipeRefs, where("userUID", "==", user.uid))
            const snapshot = await getDocs(q)
            const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
            results.forEach(async (result) => {
                const docRef = doc(db, "recipes", result.id)
                await deleteDoc(docRef)
            })
            setUpdateSavedRecipes(Math.random())
        }

    const totalGroceries = savedRecipes.reduce((count, recipe) => count + recipe.ingredients.length, 0);

    return (
        <div className="recipes-container">
            <div className="recipes-wrapper">
                <div className="recipes-box-1">
                    <div className="recipes-header">
                        <div className="recipes-title-wrapper">
                            <h1>My Recipes</h1>
                            <p onClick={handleDeleteAll} id="recipes-remove-all">Remove all items</p>
                        </div>
                        <button><span>+</span><p>Create New List</p></button>
                    </div>
                        <div className="my-recipes-seperator"></div>
                            <div className="saved-recipe-wrapper">
                                {totalGroceries === 0 && (<div className="find-recipes-message-wrapper">
                                    <img src={HungryGif} alt="hungry_gif" />
                                    <h1>Hungry? Start searching for recipes!</h1>
                                </div>)}
                                {savedRecipes.map((recipe) => {
                                    return <SavedRecipe key={recipe.id} recipe={recipe} />
                                })}
                            </div>
                        <div className="my-recipes-seperator"></div>
                    <div className="recipes-footer">
                        <h1>Total Groceries: </h1><span>{totalGroceries}</span>
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
