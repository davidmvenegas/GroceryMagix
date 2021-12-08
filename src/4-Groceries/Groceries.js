import React from 'react'
import './groceries.css'
import CopyIcon from '../Images/copy_icon.png'
import CartIcon from '../Images/cart_icon.png'
function Groceries() {
    return (
        <div className="groceries-container">
            <div className="groceries-header">
                <div className="back-button"> <btn>back</btn></div>
                <div className="shopping-list-text"><h1>Shopping list</h1></div>
                <div className="copy-button"><img src={CopyIcon} alt="copy_icon"/></div>
                <div className="sort-select"> <select>sort</select></div>
                <div className="cart"><img id="cart-thingy" src={CartIcon} alt="cart_icon"/></div>
            </div>
            <div className="ingredients-list">
                <div className="item" id="flour">flour</div>
                <div className="item" id="whole-milk">whole-milk</div>
                <div className="item" id="pumpkin-puree">pumpkin-puree</div>
                <div className="item" id="brown-sugar">brown-sugar</div>
                <div className="item" id="eggs">eggs</div>
            </div>
    </div>
    )
}
export default Groceries