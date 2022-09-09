import './App.css';
import { useState, useEffect } from 'react';
import Detailedrecipe from './components/Detailedrecipe';
import Mealcard from './components/Mealcard';
import Navbar from './components/Navbar';
import Search from './components/Search';




function App() {
 const [recipes, setRecipes] = useState()

const [modalOpen, setModalOpen] = useState(false)

const [detailedRecipe, setDetailedRecipe] = useState(['name:'])
 
useEffect(() =>{
  function getData(){
    
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&cuisine=italian`)
    .then((response) => response.json())
    .then((data) => setRecipes(data))
    .catch((error)=>console.error(error));
  }
  getData()
},[])
  
function getDetails(e){
  console.log(e)
  let id = (e.target.id).toString();
  fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}&cuisine=italian`)
    .then((response) => response.json())
    .then((data) => setDetailedRecipe(data))
    .catch((error)=>console.error(error));
    console.log(detailedRecipe);
  setModalOpen(true)
  console.log("I've been clicked")
}

function closeModal(){
  setModalOpen(false)
}
if(!recipes){
  return <main>
    <h1>Loading...</h1>
  </main>
}
  return (
    <div className="App">
     <Navbar />
     
     <Search />
     <button onClick={(()=>{console.log(recipes)})}>Get Data</button>
     <div className='cardContainer'>
{recipes.results.map(recipe=>{return <Mealcard key={recipe.id} id={recipe.id} name={recipe.title} url={recipe.image} alt={recipe.title} onClick={getDetails}/>})
}
     </div> 


  {modalOpen && <Detailedrecipe closeModal={closeModal} name={detailedRecipe.title} dairyfree={detailedRecipe.dairyFree} glutenfree={detailedRecipe.glutenFree} vegan={detailedRecipe.vegan} vegetarian={detailedRecipe.vegetarian} image={detailedRecipe.image} price={detailedRecipe.pricePerServing}/>}
    </div>
  );
}

export default App;
