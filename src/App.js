import { React, useState, Fragment} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./0-Landing/Landing"
import Navbar from "./Navbar&Footer/Navbar";
import Auth from "./1-Auth/Auth"
import Home from "./2-Home/Home"
import Recipes from "./3-Recipes/Recipes"
import Groceries from "./4-Groceries/Groceries"
import Footer from "./Navbar&Footer/Footer"

function App() {
  let location = useLocation();
  const [input, setInput] = useState('')

  return (
    <Fragment>
        {(location.pathname === '/') ? null : <Navbar setInput={setInput}/>}
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/home" element={<Home input={input} />} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/groceries" element={<Groceries/>} />
          </Routes>
          {(location.pathname === '/') ? null : <Footer/>}
    </Fragment>
  );
}

export default App;
