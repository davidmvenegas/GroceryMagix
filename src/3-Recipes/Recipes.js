import React from 'react'
import './recipes.css'

function Recipes() {
    return (
        <div className="recipes-container">
            <div className="recipes-wrapper">
                <div className="recipes-box-1">
                    <div className="recipes-header">
                        <div className="recipes-title-wrapper">
                            <h1>My Recipes</h1>
                            <p id="recipes-remove-all">Remove all items</p>
                        </div>
                        <button><span>+</span><p>Create New List</p></button>
                    </div>
                        <div className="my-recipes-seperator"></div>
                            <div className="recipes-content">

                            </div>
                        <div className="my-recipes-seperator"></div>
                    <div className="recipes-footer">
                        <h1>Total Groceries: <span>13</span></h1>
                    </div>
                </div>
                <div className="recipes-box-2">

                </div>
            </div>
        </div>
    )
}

export default Recipes
