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

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/home')
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=cb497740&app_key=5230ca56100a7c424dbcd724d88fd3d8`)
        .then(res => setRecipes(res.data.hits))
    }

    const allRecipeValues = {
        input,
        setInput,
        handleSubmit,
        recipes,
        updateSavedRecipes,
        setUpdateSavedRecipes,
    }

    return (
        <allRecipeContext.Provider value={allRecipeValues}>{children}</allRecipeContext.Provider>
    )
}