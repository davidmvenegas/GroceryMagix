import { React, useState, useEffect} from 'react'
import './home.css'
import { useUserContext } from "../1-Auth/context/userContext";
import { useRecipeContext } from '../RecipeContext';
import Recipe from './Recipe'
import FoodIcon from '../Images/make_icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"

function Home({ handleAddRecipe }) {
    const { user } = useUserContext();
    const { recipes } = useRecipeContext()
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => (window.pageYOffset > 1250) ? setIsVisible(true) : setIsVisible(false)
    const scrollToTop = () => window.scrollTo({top:0, behavior:'smooth'})

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-side-container">
                    <h2>Diets:</h2>
                    <ul>
                        <li>Low-Fat</li>
                        <li>Keto</li>
                        <li>Paleo</li>
                        <li>Kosher</li>
                        <li>Vegan</li>
                        <li>Vegetarian</li>
                        <li>High-Protein</li>
                    </ul>
                    <h2>Allergies:</h2>
                    <ul>
                        <li>Gluten-free</li>
                        <li>Dairy-free</li>
                        <li>Nut-free</li>
                        <li>Shellfish-free</li>
                        <li>Soy-free</li>
                    </ul>
                    <h2>Meal Type:</h2>
                    <ul>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Snack</li>
                        <li>Teatime</li>
                    </ul>
                    <h2>Dish Type:</h2>
                    <ul>
                        <li>Entrees</li>
                        <li>Salads</li>
                        <li>Soups</li>
                        <li>Sides</li>
                        <li>Desserts</li>
                    </ul>
                    <h2>Cuisines:</h2>
                    <ul>
                        <li>American</li>
                        <li>Chinese</li>
                        <li>French</li>
                        <li>Indian</li>
                        <li>Italian</li>
                        <li>Japanese</li>
                        <li>Mediterranean</li>
                        <li>Mexican</li>
                        <li>Middle Eastern</li>
                    </ul>
                </div>
                <div className="home-center-container">
                    {(recipes.length === 0) &&
                        <div className="home-display-messsage">
                            <h1>Welcome{user.displayName != null && (" "+user.displayName)}. To begin, search for the recipes you'd like to make </h1>
                            <img src={FoodIcon} alt="food_icon"/>
                        </div>}
                    {recipes.map((recipe) => {
                        return <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} handleAddRecipe={handleAddRecipe} />
                    })}
                </div>
                <FontAwesomeIcon className="home-scroll-btn" style={isVisible ? {opacity : 1, pointerEvents: "all"} : {opacity : 0, pointerEvents: "none"}} onClick={scrollToTop} icon={faArrowCircleUp} />
            </div>
        </div>
    )
}

export default Home
