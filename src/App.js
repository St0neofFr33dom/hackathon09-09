import './App.css';
import Detailedrecipe from './components/Detailedrecipe';
import Mealcard from './components/Mealcard';
import Navbar from './components/Navbar';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <Navbar />
     <Detailedrecipe />
     <Search />
     <Mealcard />

    </div>
  );
}

export default App;
