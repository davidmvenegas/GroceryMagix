import { React, useState, Fragment} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useUserContext } from './1-Auth/context/userContext';
import Landing from "./0-Landing/Landing"
import Navbar from "./Navbar&Footer/Navbar";
import Auth from "./1-Auth/AuthPage"
import Home from "./2-Home/Home"
import Recipes from "./3-Recipes/Recipes"
import Groceries from "./4-Groceries/Groceries"
import Footer from "./Navbar&Footer/Footer"

function App() {
  const { loading, error, user } = useUserContext()
  let location = useLocation();
  const [input, setInput] = useState('')

  return (
    <Fragment>
        {((location.pathname === '/') || (location.pathname === '/auth')) ? null : <Navbar setInput={setInput}/>}
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route path="/auth" element={<Auth loading={loading} error={error} user={user} />} />
            <Route path="/home" element={<Home input={input} />} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/groceries" element={<Groceries/>} />
          </Routes>
          {((location.pathname === '/') || (location.pathname === '/auth')) ? null : <Footer/>}
    </Fragment>
  );
}

export default App;
