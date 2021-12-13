import { React, useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useRecipeContext = () => {
    return useContext(allRecipeContext);
};
export const allRecipeContext = createContext({});

export const RecipeContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('')
    const [updateSavedRecipes, setUpdateSavedRecipes ] = useState()
    const [recipes, setRecipes] = useState([])
    const [healthFilters, setHealthFilters] = useState([])
    const [mealFilters, setMealFilters] = useState([])
    const [dishFilters, setDishFilters] = useState([])
    const [cuisinesFilters, setCuisinesFilters] = useState([])

    let cusineQuery = cuisinesFilters.length === 0 ? null : cuisinesFilters.map((i) => `&cuisineType=${i}`)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/home')
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=cb497740&app_key=5230ca56100a7c424dbcd724d88fd3d8${cusineQuery}`.replace(/null/g, ""))
        .then(res => setRecipes(res.data.hits))
        console.log(cuisinesFilters);
    }

    const allRecipeValues = {
        input,
        setInput,
        handleSubmit,
        recipes,
        updateSavedRecipes,
        setUpdateSavedRecipes,
        setHealthFilters,
        setMealFilters,
        setDishFilters,
        setCuisinesFilters,
    }

    return (
        <allRecipeContext.Provider value={allRecipeValues}>{children}</allRecipeContext.Provider>
    )
}