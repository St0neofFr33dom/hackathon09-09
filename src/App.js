import "./App.css";
import { useState, useEffect } from "react";
import Detailedrecipe from "./components/Detailedrecipe";
import Mealcard from "./components/Mealcard";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [detailedRecipe, setDetailedRecipe] = useState();

  useEffect(() => {
    function getData() {
      fetch(
     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&cuisine=italian`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data));
     }
    getData();
  }, []);

  function getDetails(id) {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => setDetailedRecipe(data));
    setModalOpen(true);
    console.log("I've been clicked");
  }

  function closeModal() {
    setModalOpen(false);
  }
  if (!recipes) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Navbar />

      <Search />
      <button
        onClick={() => {
          console.log(detailedRecipe);
        }}
      >
        Get Data
      </button>
      <div className="cardContainer">
        {recipes.results.map((recipe) => {
          return (
            <Mealcard
              key={recipe.id}
              name={recipe.title}
              url={recipe.image}
              alt={recipe.title}
              onClick={getDetails}
            />
          );
        })}
      </div>

      {modalOpen && <Detailedrecipe closeModal={closeModal} />}
    </div>
  );
}

export default App;
