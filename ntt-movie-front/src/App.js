import './assets/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import { Home } from './pages/Home';
import { MoviePage } from './pages/MoviePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/movie/:title" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
