import { React, useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const useRecipeContext = () => {
    return useContext(allRecipeContext);
};
export const allRecipeContext = createContext({});

export const RecipeContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('chicken')
    const [updateSavedRecipes, setUpdateSavedRecipes] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/home')
        console.log("im submitting");
    };

    const allRecipeValue = {
        input,
        setInput,
        handleSubmit,
        updateSavedRecipes,
        setUpdateSavedRecipes,
    }

    return (
        <allRecipeContext.Provider value={allRecipeValue}>{children}</allRecipeContext.Provider>
    )
}