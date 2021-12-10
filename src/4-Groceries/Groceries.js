import React from 'react'
import { useNavigate } from 'react-router-dom'
import './groceries.css'
import Grocery from './Grocery'
import GroceryRecipe from './GroceryRecipe'
import CopyIcon from '../Images/copy_icon.png'
import CartIcon from '../Images/cart_icon.png'

function Groceries() {
    const navigate = useNavigate();

    function navigateBack() {
        navigate('/recipes')
    }

    return (
        <div className="groceries-container">
            <div className="g-header">
                <div className="g-header-bx1">
                    <button className="g-back-btn" onClick={navigateBack}>Back</button>
                </div>
                <div className="g-header-bx2">
                    <h1 className="g-title">Shopping List #1</h1>
                </div>
                <div className="g-header-bx3">
                    <img className="g-copy-icon" src={CopyIcon} alt="copy_icon" />
                </div>
                <div className="g-header-bx4">
                    <select className="g-select-box">
                        <option disabled defaultValue hidden>Sort By</option>
                        <option id="g-select-option" value="amount">Amount</option>
                        <option id="g-select-option" value="alphabetical">A - Z</option>
                        <option id="g-select-option" value="category">Type</option>
                    </select>
                </div>
                <div className="g-header-bx5">
                    <div className="g-cart-wrapper">
                        <span>13</span>
                        <img className="g-cart-icon" src={CartIcon} alt="cart_icon" />
                    </div>
                </div>
            </div>
            <div className="g-seperator"></div>
            <div className="g-body">
                <div className="g-body-bx1">
                    <GroceryRecipe />
                    <GroceryRecipe />
                    <GroceryRecipe />
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