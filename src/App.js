import './App.css';
import { useState, useEffect } from 'react';
import Detailedrecipe from './components/Detailedrecipe';
import Mealcard from './components/Mealcard';
import Navbar from './components/Navbar';
import Search from './components/Search';


function App() {
 const [recipes, setRecipes] = useState()

useEffect(() =>{
  function getData(){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&cuisine=italian`)
    .then((response) => response.json())
    .then((data) => setRecipes(data));
  }
  getData()
},[])
  
if(!recipes){
  return <h1>Loading...</h1>
}
  return (
    <div className="App">
     <Navbar />
     <Detailedrecipe />
     <Search />
     <button onClick={(()=>{console.log(recipes)})}>Get Data</button>
     <div>
{recipes.results.map(recipe=>{return <Mealcard key={recipe.id} name={recipe.title} url={recipe.image} alt={recipe.title}/>})
}
     </div>

     
    </div>
  );
}

export default App;
