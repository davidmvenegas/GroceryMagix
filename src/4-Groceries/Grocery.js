import React from 'react'
import './grocery.css'

function Grocery({ groceryById, allGroceries, list }) {
    let food = allGroceries.find(item => item.foodId === groceryById.food);
    let curAmount = groceryById.amount
    let measurement = food.measure
    let name = food.food
    let image = food.image
    let category = food.foodCategory
    let typeBackgroundColor;
    let typeMeasurement;

    switch (category) {
        case "grains":
            typeBackgroundColor = 'wheat';
            break;
        case "Dairy":
            typeBackgroundColor = '#48bfe3';
            break;
        case "fruit":
            typeBackgroundColor = '#2dc653';
            break;
        case "Condiments and sauces":
            typeBackgroundColor = '#c8b6ff';
            break;
        default:
            typeBackgroundColor = '#888';
    }

    switch (measurement) {
        case "<unit>":
            typeMeasurement = 'Amount';
            break;
        case "box":
            typeMeasurement = 'Boxes';
            break;
        case "pinch":
            typeMeasurement = 'Pinches';
            break;
        case "half":
            typeMeasurement = 'Halves';
            break;
        case null:
            typeMeasurement = null;
            break;
        default:
            typeMeasurement = measurement + "s";
    }

    return (
        <div className="g-body-grocery-item">
            <div className="g-body-grocery-item-bx1">
                <div style={{backgroundColor: typeBackgroundColor}} className="g-body-grocery-item-type" id="grocery-item-type"></div>
                <img src={image} alt="N/A"/>
                <h1 className="g-body-grocery-item-title">{name}</h1>
            </div>
            <div className="g-body-grocery-item-bx2">
                {typeMeasurement === null ? <div style={{marginRight: "2.5rem"}} className="g-body-grocery-item-measurement">Season To Taste</div> : <><div className="g-body-grocery-item-measurement">{typeMeasurement} :</div>
                <div className="g-body-grocery-item-amount">{curAmount}</div></>}
            </div>
        </div>
    )
}

export default Grocery
