import './App.css';
import { useState } from 'react';
import Detailedrecipe from './components/Detailedrecipe';
import Mealcard from './components/Mealcard';
import Navbar from './components/Navbar';
import Search from './components/Search';


function App() {
 const [recipes, setRecipes] = useState([])

  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=01e39cb5dd804a48aa3f6d9340db1848`)
       .then((response) => response.json())
       .then((data) => setRecipes(data));

  return (
    <div className="App">
     <Navbar />
     <Detailedrecipe />
     <Search />
     <Mealcard name="Spaghetti Bolognase" url="https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/spaghetti-bolognese.jpg" alt="Spaghetti Bolgonase"/>

    </div>
  );
}

export default App;
