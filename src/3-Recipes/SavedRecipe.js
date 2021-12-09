import React from 'react'
import './savedrecipe.css'
import TrashIcon from '../Images/trash_icon.png'

function SavedRecipe() {
    return (
        <div className="recipes-content">
            <div className="recipes-content-1">
                <img src="https://d1uz88p17r663j.cloudfront.net/original/b829edd68c818352a26f754a8184e636_bak---02---libby_s-famous-pumpkin-pie-617_edit.jpg" alt="Recipe_Img" />
            </div>
            <div className="recipes-content-2">
                <h1>Perfect Pumpkin Pie</h1>
                <div className="recipes-servings-wrapper">
                    <p>Servings:</p>
                    <div className="servings-btn-wrapper">
                        <button className="servings-btn-1">-</button>
                        <div className="servings-btn-count">4</div>
                        <button className="servings-btn-2">+</button>
                    </div>
                </div>
            </div>
            <div className="recipes-content-3">
                <div className="recipes-g-amount">
                    <h2>GROCERIES: </h2>
                    <span>8</span>
                </div>
                <img src={TrashIcon} alt="" />
            </div>
        </div>
    )
}

export default SavedRecipe
