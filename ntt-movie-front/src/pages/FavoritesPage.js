import { useContext, useState } from "react";
import Form from "../components/Form";
import PageWrapper from "../styled-components/PageWrapper";
import { Link } from "react-router-dom";
import SearchContext from "../contexts/searchContext";
import FavoritesContext from "../contexts/favoritesContext";
import { HomeWrapper, ListWrapper } from "./Home";
import brokenImage from "../assets/broken-image.png";

export function FavoritesPage() {
  const [movie, setMovie] = useState({title: ""});
  const { setList } = useContext(SearchContext);
  const { favorites } = useContext(FavoritesContext);
  
  return (
    <PageWrapper>
      <HomeWrapper>
        <Form movie={movie} setMovie={setMovie} setList={setList} />
        <MoviesList favorites={favorites} />
      </HomeWrapper>
    </PageWrapper>
  );
}

function MoviesList({ favorites }) {
  return (
    <ListWrapper>
      { favorites && favorites.length > 0 && (
        <>
          {favorites.map((movie, index) => (
            <div key={index}>
              <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster === "N/A" ? brokenImage : movie.Poster} alt="poster" /></Link>
              <h6>{movie.Title}</h6>
              <p>{movie.Year}</p>
            </div>
          ))}
        </>
      )}
    </ListWrapper>
  );
  
}
