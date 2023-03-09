import './assets/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import { Home } from './pages/Home';
import { MoviePage } from './pages/MoviePage';
import { Header } from './components/Header';
import FavoritesContext from './contexts/favoritesContext';
import { useState } from 'react';
import SearchContext from './contexts/searchContext';
import { FavoritesPage } from './pages/FavoritesPage';
import api from './services/api';

function App() {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")));
  const [list, setList] = useState([]);
  //api.loadBaseURL();

  return (
    <SearchContext.Provider value={{ list, setList }}>
    <FavoritesContext.Provider value={{ favorites, setFavorites}}>
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/movie/:id" element={<MoviePage />} />
        <Route path = "/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
    </FavoritesContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
