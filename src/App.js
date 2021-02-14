import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
const APP_ID = "d26a1f60";
const APP_KEY = "214b53cfdd20fcf7efa69842062a2ce9";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('rice')

useEffect(() =>{
const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
 }
 
getRecipes();
}, [query]);


const updateSearch = e => {
  setSearch(e.target.value);
  
}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch(" ");
}

    return(
     <div className="App">
    <form onSubmit={getSearch} className="search-form">
    <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
    <button type="submit" className="search-button">Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe => (
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
    ))}
    </div>
     </div>
    )
}

export default App
