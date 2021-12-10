import { React} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useUserContext } from "../1-Auth/context/userContext";
import DishIcon from '../Images/dish_icon.png'
import SearchIcon from '../Images/search_icon.png'

function Navbar({setInput, handleSubmit}) {
    const { logoutUser } = useUserContext();

    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-box-one">
                    <h1 className="navbar-logo" to="/">Grocery Magi<span>x</span></h1>
                </div>
                <div className="navbar-box-two">
                    <form className="navbar-search" onSubmit={handleSubmit}>
                        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search for recipes..." />
                        <button id="navbar-search-btn" type="submit"><img src={SearchIcon} alt="search_icon" /></button>
                    </form>
                </div>
                <div className="navbar-box-three">
                    <Link to="/recipes">
                        <div className="navbar-recipes-box">
                            <img src={DishIcon} alt="dish_icon" />
                            <p>0</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-box-four">
                <h1 className="navbar-user-greeting">Hello, Tani</h1>
                    <Link to="/">
                        <button className="navbar-logout-button" onClick={logoutUser}>Log out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
