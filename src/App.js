import './App.css';
import Detailedrecipe from './components/Detailedrecipe';
import Mealcard from './components/Mealcard';
import Navbar from './components/Navbar';
import Search from './components/Search';


function App() {
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
