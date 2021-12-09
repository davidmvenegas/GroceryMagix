import React from 'react'
import './grocery.css'
import DeleteIcon from '../Images/delete_icon.jpeg'

function Grocery() {
    return (
        <div className="g-body-grocery-item">
            <div className="g-body-grocery-item-bx1">
                <div className="g-body-grocery-item-type" id="grocery-item-type"></div>
                <h1 className="g-body-grocery-item-title">Whole Milk</h1>
            </div>
            <div className="g-body-grocery-item-bx2">
                <div className="g-body-grocery-item-measurement">Cups:</div>
                <div className="g-body-grocery-item-amount">3</div>
            </div>
            <div className="g-body-grocery-item-bx3">
                <img className="g-body-grocery-item-delete" src={DeleteIcon} alt="delete_icon" />
            </div>
        </div>
    )
}

export default Grocery
