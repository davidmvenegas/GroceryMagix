import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './groceries.css'
import Grocery from './Grocery'
import GroceryRecipe from './GroceryRecipe'
import CopyIcon from '../Images/copy_icon.png'
import CartIcon from '../Images/cart_icon.png'

function Groceries() {
    const navigate = useNavigate();
    const location = useLocation()
    const { list } = location.state
    const recipes = list.savedRecipes
    let holder = {};
    let groceriesById = [];

    function navigateBack() {
        navigate('/recipes')
    }

    const allGroceries = recipes.map(recipe => recipe.ingredients).flat()
    
    allGroceries.forEach((grocery) => {
        if (holder.hasOwnProperty(grocery.foodId)) {
            holder[grocery.foodId] = holder[grocery.foodId] += grocery.quantity
        } else {
            holder[grocery.foodId] = grocery.quantity
        }
    })

    for (let item in holder) {
        groceriesById.push({food: item, amount: holder[item]})
    }

    console.log(allGroceries)
    return (
        <div className="groceries-container">
            <div className="g-header">
                <div className="g-header-bx1">
                    <button className="g-back-btn" onClick={navigateBack}>Back</button>
                </div>
                <div className="g-header-bx2">
                    <h1 className="g-title">{list.listName}</h1>
                </div>
                <div className="g-header-bx3">
                    <img className="g-copy-icon" src={CopyIcon} alt="copy_icon" />
                </div>
                <div className="g-header-bx4">
                    <select className="g-select-box">
                        <option disabled selected hidden>Sort By</option>
                        <option id="g-select-option" value="amount">Amount</option>
                        <option id="g-select-option" value="alphabetical">A - Z</option>
                        <option id="g-select-option" value="category">Type</option>
                    </select>
                </div>
                <div className="g-header-bx5">
                    <div className="g-cart-wrapper">
                        <span>{groceriesById.length}</span>
                        <img className="g-cart-icon" src={CartIcon} alt="cart_icon" />
                    </div>
                </div>
            </div>
            <div className="g-seperator"></div>
            <div className="g-body">
                <div className="g-body-bx1">
                    {recipes.map((recipe) => {
                        return <GroceryRecipe key={recipe.id} recipe={recipe} />
                    })}
                </div>
                <div className="g-body-seperator"></div>
                <div className="g-body-bx2">
                    <div className="g-body-grocery-header">
                        <div className="g-body-grocery-header-types">
                            <div className="g-body-grocery-item-type-wrapper">
                                <div className="g-body-grocery-item-type" id="produce"></div>
                                Produce
                            </div>
                            <div className="g-body-grocery-item-type-wrapper">
                                <div className="g-body-grocery-item-type" id="meat"></div>
                                Meat
                            </div>
                            <div className="g-body-grocery-item-type-wrapper">
                                <div className="g-body-grocery-item-type" id="dairy"></div>
                                Dairy
                            </div>
                            <div className="g-body-grocery-item-type-wrapper">
                                <div className="g-body-grocery-item-type" id="grains"></div>
                                Grains
                            </div>
                            <div className="g-body-grocery-item-type-wrapper">
                                <div className="g-body-grocery-item-type" id="oilsandspices"></div>
                                Oils & Spices
                            </div>
                        </div>
                        <div className="g-body-grocery-header-remove-all">Remove All Items</div>
                    </div>
                    <div className="g-body-grocery-content">
                        <Grocery />
                        <Grocery />
                        <Grocery />
                        <Grocery />
                        <Grocery />
                        <Grocery />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Groceries