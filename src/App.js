import { React, Fragment} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useUserContext } from './1-Auth/context/userContext';
import { RecipeContextProvider } from './RecipeContext';
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

  return (
    <Fragment>
      <RecipeContextProvider>
        {((location.pathname === '/') || (location.pathname === '/auth')) ? null : <Navbar />}
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route path="/auth" element={<Auth loading={loading} error={error} user={user} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/groceries" element={<Groceries/>} />
          </Routes>
        {((location.pathname === '/') || (location.pathname === '/auth')) ? null : <Footer/>}
      </RecipeContextProvider>
    </Fragment>
  );
}

export default App;
