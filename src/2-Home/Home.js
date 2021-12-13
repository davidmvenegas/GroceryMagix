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
    const { recipes, setMealFilters, setHealthFilters, setDishFilters, setCuisinesFilters } = useRecipeContext()
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => (window.pageYOffset > 1250) ? setIsVisible(true) : setIsVisible(false)
    const scrollToTop = () => window.scrollTo({top:0, behavior:'smooth'})

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    let healthFilterArr = []
    let mealFilterArr = []
    let dishFilterArr = []
    let cuisinesFilterArr = []

    const handleMealFilter = (item) => {
        mealFilterArr = [item]
        setMealFilters(mealFilterArr)
    }
    const handleHealthFilter = (item) => {
        healthFilterArr.includes(item) ? healthFilterArr = healthFilterArr.filter((curItem) => curItem !== item) : healthFilterArr.push(item)
        setHealthFilters(healthFilterArr)
    }
    const handleDishFilter = (item) => {
        dishFilterArr.includes(item) ? dishFilterArr = dishFilterArr.filter((curItem) => curItem !== item) : dishFilterArr.push(item)
        setDishFilters(dishFilterArr)
    }
    const handleCuisineFilter = (item) => {
        cuisinesFilterArr.includes(item) ? cuisinesFilterArr = cuisinesFilterArr.filter((curItem) => curItem !== item) : cuisinesFilterArr.push(item)
        setCuisinesFilters(cuisinesFilterArr)
        console.log(cuisinesFilterArr);
    }

    function handleUnselectAll() {
        const checkBoxes = document.querySelectorAll("input[type='checkbox']")
        const allButton = document.querySelector("#allMeals")
        checkBoxes.forEach((box) => box.checked = false)
        allButton.checked = true
        healthFilterArr = []
        dishFilterArr = []
        cuisinesFilterArr = []
        mealFilterArr = []
        setMealFilters(mealFilterArr)
        setHealthFilters(healthFilterArr)
        setDishFilters(dishFilterArr)
        setCuisinesFilters(cuisinesFilterArr)
    }

    return (
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-side-container">
                    <h1 className="home-side-filter-title">Filter your search:</h1>
                    <form>
                        <h2>Meal Type:</h2>
                        <ul>
                            <input onClick={() => (handleMealFilter(null))} type='radio' name='mealRadio' id='allMeals' defaultChecked="defaultChecked" />
                            <label htmlFor='allMeals'>All</label>
                            <br />
                            <input onClick={() => (handleMealFilter('Breakfast'))} type='radio' name='mealRadio' id='Breakfast'/>
                            <label htmlFor='Breakfast'>Breakfast</label>
                            <br />
                            <input onClick={() => (handleMealFilter('Lunch'))} type='radio' name='mealRadio' id='Lunch'/>
                            <label htmlFor='Lunch'>Lunch</label>
                            <br />
                            <input onClick={() => (handleMealFilter('Dinner'))} type='radio' name='mealRadio' id='Dinner'/>
                            <label htmlFor='Dinner'>Dinner</label>
                            <br />
                            <input onClick={() => (handleMealFilter('Snack'))} type='radio' name='mealRadio' id='Snack'/>
                            <label htmlFor='Snack'>Snack</label>
                            <br />
                            <input onClick={() => (handleMealFilter('Teatime'))} type='radio' name='mealRadio' id='Teatime'/>
                            <label htmlFor='Teatime'>Teatime</label>
                        </ul>
                        <h2>Diets:</h2>
                        <ul>
                            <input onClick={() => (handleHealthFilter('vegetarian'))} type='checkbox' id='Vegetarian'/>
                            <label htmlFor='Vegetarian'>Vegetarian</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('vegan'))} type='checkbox' id='Vegan'/>
                            <label htmlFor='Vegan'>Vegan</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('keto-friendly'))} type='checkbox' id='Keto'/>
                            <label htmlFor='Keto'>Keto</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('paleo'))} type='checkbox' id='Paleo'/>
                            <label htmlFor='Paleo'>Paleo</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('kosher'))} type='checkbox' id='Kosher'/>
                            <label htmlFor='Kosher'>Kosher</label>
                        </ul>
                        <h2>Allergies:</h2>
                        <ul>
                            <input onClick={() => (handleHealthFilter('gluten-free'))} type='checkbox' id='Gluten-free'/>
                            <label htmlFor='Gluten-free'>Gluten-free</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('dairy-free'))} type='checkbox' id='Dairy-free'/>
                            <label htmlFor='Dairy-free'>Dairy-free</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('peanut-free'))} type='checkbox' id='Peanut-free'/>
                            <label htmlFor='Peanut-free'>Peanut-free</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('tree-nut-free'))} type='checkbox' id='Tree-Nut-free'/>
                            <label htmlFor='Tree-Nut-free'>Tree-Nut-free</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('shellfish-free'))} type='checkbox' id='Shellfish-free'/>
                            <label htmlFor='Shellfish-free'>Shellfish-free</label>
                            <br />
                            <input onClick={() => (handleHealthFilter('soy-free'))} type='checkbox' id='Soy-free'/>
                            <label htmlFor='Soy-free'>Soy-free</label>
                        </ul>
                        <h2>Dish Type:</h2>
                        <ul>
                            <input onClick={() => (handleDishFilter('Main course'))} type='checkbox' id='Entrees'/>
                            <label htmlFor='Entrees'>Entrees</label>
                            <br />
                            <input onClick={() => (handleDishFilter('Salad'))} type='checkbox' id='Salads'/>
                            <label htmlFor='Salads'>Salads</label>
                            <br />
                            <input onClick={() => (handleDishFilter('Soup'))} type='checkbox' id='Soups'/>
                            <label htmlFor='Soups'>Soups</label>
                            <br />
                            <input onClick={() => (handleDishFilter('Starter'))} type='checkbox' id='Sides'/>
                            <label htmlFor='Sides'>Sides</label>
                            <br />
                            <input onClick={() => (handleDishFilter('Desserts'))} type='checkbox' id='Desserts'/>
                            <label htmlFor='Desserts'>Desserts</label>
                        </ul>
                        <h2>Cuisines:</h2>
                        <ul>
                            <input onClick={() => (handleCuisineFilter('American'))} type='checkbox' id='American'/>
                            <label htmlFor='American'>American</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Chinese'))} type='checkbox' id='Chinese'/>
                            <label htmlFor='Chinese'>Chinese</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('French'))} type='checkbox' id='French'/>
                            <label htmlFor='French'>French</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Indian'))} type='checkbox' id='Indian'/>
                            <label htmlFor='Indian'>Indian</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Italian'))} type='checkbox' id='Italian'/>
                            <label htmlFor='Italian'>Italian</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Japanese'))} type='checkbox' id='Japanese'/>
                            <label htmlFor='Japanese'>Japanese</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Mediterranean'))} type='checkbox' id='Mediterranean'/>
                            <label htmlFor='Mediterranean'>Mediterranean</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Mexican'))} type='checkbox' id='Mexican'/>
                            <label htmlFor='Mexican'>Mexican</label>
                            <br />
                            <input onClick={() => (handleCuisineFilter('Middle Eastern'))} type='checkbox' id='Middle-Eastern'/>
                            <label htmlFor='Middle-Eastern'>Middle-Eastern</label>
                        </ul>
                    </form>
                    <h1 onClick={() => (handleUnselectAll())} className="home-side-clear-all">Clear All</h1>
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
