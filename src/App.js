import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ExplorePrincipal from './pages/ExplorePrincipal';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DrinksByIngredients from './pages/DrinksByIngredients';
import FoodsByIngredients from './pages/FoodsByIngredients';
import FoodsByNationality from './pages/FoodsByNationality';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/explore" component={ ExplorePrincipal } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        {/* <Route exact path="/search" component={ Search } /> */}
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/foods/ingredients" component={ FoodsByIngredients } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ FoodsByNationality }
        />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ DrinksByIngredients }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
