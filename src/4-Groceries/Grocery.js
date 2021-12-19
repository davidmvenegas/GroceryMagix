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
        case "condiments and sauces":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "meats":
            typeBackgroundColor = '#ee6055';
            break;
        case "vegetables":
            typeBackgroundColor = '#2dc653';
            break;
        case "bread, rolls and tortillas":
            typeBackgroundColor = 'wheat';
            break;
        case "Cheese":
            typeBackgroundColor = '#48bfe3';
            break;
        case "Poultry":
            typeBackgroundColor = '#ee6055';
            break;
        case "Oils":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "canned soup":
            typeBackgroundColor = '#ee6055';
            break;
        case "wines":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "cured meats":
            typeBackgroundColor = '#ee6055';
            break;
        case "canned vegetables":
            typeBackgroundColor = '#2dc653';
            break;
        case "quick breads and pastries":
            typeBackgroundColor = 'wheat';
            break;
        case "sugars":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "pastries":
            typeBackgroundColor = 'wheat';
            break;
        case "plant-based protein":
            typeBackgroundColor = '#2dc653';
            break;
        case "candy":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "chocolate":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "sugar syrups":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "ready-to-eat cereals":
            typeBackgroundColor = 'wheat';
            break;
        case "seafood":
            typeBackgroundColor = '#ee6055';
            break;
        case "Cured meats":
            typeBackgroundColor = '#ee6055';
            break;
        case "sugar jam":
            typeBackgroundColor = '#c8b6ff';
            break;
        case "Eggs":
            typeBackgroundColor = '#48bfe3';
            break;
        case "yogurt":
            typeBackgroundColor = '#48bfe3';
            break;
        case "milk":
            typeBackgroundColor = '#48bfe3';
            break;
        case "water":
            typeBackgroundColor = '#3F37C9';
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

    function isInt(n) {
        return n % 1 === 0
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
                <div className="g-body-grocery-item-amount">{(isInt(curAmount)) ? curAmount : ((curAmount.toString().split('.')[1].length > 2) ? (curAmount.toFixed(2)) : (curAmount.toFixed(1)))}</div></>}
            </div>
        </div>
    )
}

export default Grocery

// .split('.')[1].length