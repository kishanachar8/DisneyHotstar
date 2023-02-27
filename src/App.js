import './css/App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Movies from './components/movies';
import Footer from './components/footer';
import Celebs from './components/celebrites';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PageNotFound from './components/404';
import AddFavourites from './components/addFavourites';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/add-favourites' element={<AddFavourites/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
