import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from "../1-Auth/context/userContext";
import { useRecipeContext } from '../RecipeContext';
import './recipes.css'
import ReactCardFlip from 'react-card-flip';
import SavedRecipe from './SavedRecipe'
import HungryGif from '../Images/hungry_gif.gif'
import RedXIcon from '../Images/red_x_icon.png'
import RightArrow from '../Images/arrow_right.png'
import TrashIcon from '../Images/trash_icon.png'

function Recipes() {
    const { db, collection, user, doc, addDoc, getDocs, deleteDoc, query, where } = useUserContext()
    const { updateSavedRecipes, setUpdateSavedRecipes, savedRecipes, setSavedRecipes, savedGroceries, setSavedGroceries } = useRecipeContext()
    const [isFlipped, setIsFlipped] = useState(false)
    const [listName, setListName] = useState('')

    useEffect(() => {
        const queryRecipes = async () => {
            const recipeRef = await collection(db, "recipes")
                const q = await query(recipeRef, where("userUID", "==", user.uid))
                const snapshot = await getDocs(q)
                const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
                setSavedRecipes(results)
        }
        const queryGroceries = async () => {
            const recipeRef = await collection(db, "groceries")
                const q = await query(recipeRef, where("userUID", "==", user.uid))
                const snapshot = await getDocs(q)
                const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
                setSavedGroceries(results)
                console.log(savedGroceries);
        }
        queryRecipes()
        queryGroceries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateSavedRecipes])

    const handleDeleteAll = async () => {
        const recipeRefs = await collection(db, "recipes")
        const q = await query(recipeRefs, where("userUID", "==", user.uid))
        const snapshot = await getDocs(q)
        const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
        results.forEach(async (result) => {
            const docRef = await doc(db, "recipes", result.id)
            await deleteDoc(docRef)
        })
        setUpdateSavedRecipes(Math.random())
    }

    async function createGroceryList() {
        try {
        const docRef = await addDoc(collection(db, "groceries"), {
            listName: listName,
            savedRecipes: savedRecipes,
            userUID: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

    const deleteGroceryList = async (list) => {
        await deleteDoc(doc(db, "groceries", list))
        await setUpdateSavedRecipes(Math.random())
    }

    function handleFlip() {
        const textBox = document.getElementById("focusText")
        if (isFlipped) {
            textBox.blur()
            textBox.value = ""
        } else {
            textBox.focus()
        } 
        setIsFlipped(!isFlipped)
    }

    function handleChange(e) {
        setListName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createGroceryList()
        handleDeleteAll()
        handleFlip()
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
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <button style={savedRecipes.length > 0 ? {pointerEvents: "all"} : {pointerEvents: "none", opacity: ".5" }} className="recipe-flip-button-front" onClick={handleFlip}><span className="recipe-flip-front-plus">+</span><p className="recipe-flip-front-title">Create New List</p></button>
                            <button className="recipe-flip-button-back">
                                    <img className="recipe-flip-text-cancel" onClick={handleFlip} src={RedXIcon} alt='thin_x'/>
                                    <form className="recipe-flip-text-form" onSubmit={handleSubmit}>
                                        <input className="recipe-flip-text-input" maxLength="12" id="focusText" type="text" placeholder='Name your list...' onChange={handleChange} required/>
                                        <button className="recipe-flip-text-submit-wrapper" type="submit">
                                            <img className="recipe-flip-text-submit" src={RightArrow} alt="right_arrow" />
                                        </button>
                                    </form>
                            </button>
                        </ReactCardFlip>
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
                        <h1 className="recipes-shopping-lists-title">Shopping Lists (<span>{savedGroceries.length}</span>)</h1>
                        <div className="recipes-shopping-lists-content-seperator"></div>
                        <div className="recipes-shopping-lists-container">
                            {savedGroceries.map((list) => (
                                <div id='recipes-list-item-wrapper'>
                                    <img id='recipes-list-item-delete' onClick={() => deleteGroceryList(list.id)} src={TrashIcon} alt="trash_icon" />
                                    <Link id='recipes-list-item' to='/groceries' state={{list : list}}>
                                        <h1 style={list.listName.length > 10 ? {fontSize: '1.85rem'} : {fontSize: '2.25rem'}}>{list.listName}</h1>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes
