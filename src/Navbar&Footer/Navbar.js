import { React, useEffect, useState} from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from "../1-Auth/context/userContext"
import { useRecipeContext } from '../RecipeContext'
import DishIcon from '../Images/dish_icon.png'
import SearchIcon from '../Images/search_icon.png'

function Navbar() {
    const navigate = useNavigate()
    const { logoutUser, user, collection, db, query, where, getDocs } = useUserContext()
    const { setInput, handleSubmit, updateSavedRecipes } = useRecipeContext()
    let [queryRecipeCount, setQueryRecipeCount] = useState()

    useEffect(() => {
        const countRecipes = async () => {
            try {
                const recipeRef = collection(db, "recipes")
                const q = query(recipeRef, where("userUID", "==", user.uid))
                const querySnapshot = await getDocs(q)
                setQueryRecipeCount(querySnapshot.size)
            } catch (e) {
            console.error("Error adding document: ", e)
            }
        }
        countRecipes()
    }, [collection, db, getDocs, query, updateSavedRecipes, user.uid, where])

    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-box-one">
                    <h1 className="navbar-logo" onClick={() => navigate('/home')}>Grocery Magi<span>x</span></h1>
                </div>
                <div className="navbar-box-two">
                    <form className="navbar-search" onSubmit={handleSubmit}>
                        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search for recipes..." />
                        <button id="navbar-search-btn" type="submit"><img src={SearchIcon} alt="search_icon" /></button>
                    </form>
                </div>
                <div className="navbar-box-three">
                    <Link to="/recipes">
                        <div className="navbar-recipes-box">
                            <img src={DishIcon} alt="dish_icon" />
                            <p style={(queryRecipeCount > 9) ? {fontSize : "2.65rem", letterSpacing: "-.2rem", paddingRight: ".1rem"} : {fontSize : "3rem"}} >{queryRecipeCount}</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-box-four">
                <h1 className="navbar-user-greeting">Hello, <span>{user.displayName != null && (user.displayName)}</span></h1>
                    <Link to="/exit">
                        <button className="navbar-logout-button" onClick={logoutUser}>Log out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
