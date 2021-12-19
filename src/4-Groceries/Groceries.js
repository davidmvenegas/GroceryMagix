import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useUserContext } from "../1-Auth/context/userContext";
import './groceries.css'
import Grocery from './Grocery'
import GroceryRecipe from './GroceryRecipe'
import CopyIcon from '../Images/copy_icon.png'
import CartIcon from '../Images/cart_icon.png'

function Groceries() {
    const { db, doc, updateDoc, deleteDoc } = useUserContext()
    const navigate = useNavigate();
    const location = useLocation()
    const { list } = location.state
    const recipes = list.savedRecipes
    const allGroceries = list.allGroceries
    const groceriesById = list.groceriesById
    const [renameTitle, setRenameTitle] = useState()
    const [sortedList, setSortedList] = useState([...groceriesById])
    let copyOfList = []
    
    function navigateBack() {
        navigate('/recipes')
    }

    async function handleChangeTitle() {
        const groceryListRef = doc(db, "groceries", list.id);
        await updateDoc(groceryListRef, {
            listName: renameTitle
        })
    }

    async function handleCopyList() {
        await groceriesById.forEach((groceryById) => {
            let food = allGroceries.find(item => item.foodId === groceryById.food);
            let name = food.food.split(" ").map((word) => (word[0].toUpperCase() + word.substring(1).toLowerCase())).join(" ")
            let measurement = food.measure
            let capitalizedMeasurement = (measurement !== null && (measurement.split(" ").map((word) => (word[0].toUpperCase() + word.substring(1).toLowerCase())).join(" ") + "s"))
            let curAmount = groceryById.amount
            let typeMeasurement;
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
                    typeMeasurement = 'Season to Taste';
                    break;
                default:
                    typeMeasurement = capitalizedMeasurement
            }
            copyOfList.push(`${name} - ${typeMeasurement} : ${curAmount}\n`)
        })
        let cleanText = copyOfList.join(" ")
        navigator.clipboard.writeText(cleanText)
        setTimeout(() => alert("Shopping List Copied to Clipboard!"), 250)
    }

    function handleSelection(e) {
        switch (e.target.selectedIndex) {
            case 1:
                handleSortValue()
                break;
            case 2:
                handleSortAtoZ()
                break;
            case 3:
                handleSortByType()
                break;
            default:
                break;
        }
    }

    function handleSortAtoZ() {
        let groceryNames = []
        let holder = {}
        let finalHolder = []
        groceriesById.forEach((groceryById) => {
            let food = allGroceries.find(item => item.foodId === groceryById.food)
            let name = food.food.toLowerCase()
            groceryNames.push(name)
        })
        let sortedResult = groceryNames.sort()
        sortedResult.forEach((name) => {
            let correctFood = allGroceries.find(item => item.food.toLowerCase() === name)
            let correctId = correctFood.foodId
            let minimizedGrocery = groceriesById.find(item => item.food === correctId)
            holder[correctId] = minimizedGrocery.amount
        })
        for (let item in holder) {
            finalHolder.push({food: item, amount: holder[item]})
        }
        setSortedList(finalHolder)
    }

    function handleSortValue() {
        let sortedResult = groceriesById.sort((a, b) => (a.amount > b.amount) ? 1 : -1)
        setSortedList(sortedResult)
    }

    function handleSortByType() {
        let groceryTypes = []
        let holder = {}
        let finalHolder = []
        groceriesById.forEach((groceryById) => {
            let food = allGroceries.find(item => item.foodId === groceryById.food)
            let type = food.foodCategory
            let correctType;
            switch (type) {
                case "fruit":
                    correctType = 1
                    break;
                case "grains":
                    correctType = 4
                    break;
                case "Dairy":
                    correctType = 3
                    break;
                case "Condiments and sauces":
                    correctType = 5;
                    break;
                case "condiments and sauces":
                    correctType = 5;
                    break;
                case "meats":
                    correctType = 2;
                    break;
                case "vegetables":
                    correctType = 1;
                    break;
                case "bread, rolls and tortillas":
                    correctType = 4;
                    break;
                case "Cheese":
                    correctType = 3;
                    break;
                case "Poultry":
                    correctType = 2;
                    break;
                case "Oils":
                    correctType = 5;
                    break;
                case "canned soup":
                    correctType = 2;
                    break;
                case "wines":
                    correctType = 5;
                    break;
                case "cured meats":
                    correctType = 2;
                    break;
                case "canned vegetables":
                    correctType = 1;
                    break;
                case "quick breads and pastries":
                    correctType = 4;
                    break;
                case "sugars":
                    correctType = 5;
                    break;
                case "pastries":
                    correctType = 4;
                    break;
                case "plant-based protein":
                    correctType = 1;
                    break;
                case "candy":
                    correctType = 5;
                    break;
                case "chocolate":
                    correctType = 5;
                    break;
                case "sugar syrups":
                    correctType = 5;
                    break;
                case "ready-to-eat cereals":
                    correctType = 4;
                    break;
                case "water":
                    correctType = 6;
                    break;
                case "seafood":
                    correctType = 2;
                    break;
                case "Cured meats":
                    correctType = 2;
                    break;
                case "sugar jam":
                    correctType = 5;
                    break;
                case "Eggs":
                    correctType = 3;
                    break;
                case "yogurt":
                    correctType = 3;
                    break;
                case "milk":
                    correctType = 3;
                    break;
                default:
                    correctType = 9
                    break;
            }
            groceryTypes.push({foodId: food.foodId, foodType: correctType})
        })
        let sortedResult = groceryTypes.sort((a, b) => (a.foodType > b.foodType) ? 1 : -1)
        sortedResult.forEach((grocery) => {
            let correctFood = allGroceries.find(item => item.foodId === grocery.foodId)
            let correctId = correctFood.foodId
            let minimizedGrocery = groceriesById.find(item => item.food === correctId)
            holder[correctId] = minimizedGrocery.amount
        })
        for (let item in holder) {
            finalHolder.push({food: item, amount: holder[item]})
        }
        setSortedList(finalHolder)
    }

    async function deleteGroceryList() {
        let result = window.confirm("Are you sure you want to delete this list?");
        if(result){
            await deleteDoc(doc(db, "groceries", list.id))
            navigate('/recipes')
        }
    }

    return (
        <div className="groceries-container">
            <div className="g-header">
                <div className="g-header-bx1">
                    <button className="g-back-btn" onClick={navigateBack}>Back</button>
                </div>
                <div className="g-header-bx2">
                    <input maxLength="20" onChange={e => setRenameTitle(e.target.value)}  onBlur={(renameTitle !== undefined) ? handleChangeTitle : undefined} className="g-title" defaultValue={list.listName} />
                </div>
                <div className="g-header-bx3">
                    <img className="g-copy-icon" src={CopyIcon} alt="copy_icon" onClick={handleCopyList} />
                </div>
                <div className="g-header-bx4">
                    <select className="g-select-box" onChange={handleSelection}>
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
                        <div className="g-body-grocery-header-remove-all" onClick={() => deleteGroceryList()}>Delete List</div>
                    </div>
                    <div className="g-body-grocery-content">
                        {sortedList.map((groceryById) => {
                            return <Grocery key={groceriesById.food} groceryById={groceryById} allGroceries={allGroceries} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Groceries