import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import PageWrapper from "../styled-components/PageWrapper";
import styled from "styled-components";
import Form from "../components/Form";
import { AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavoritesContext from "../contexts/favoritesContext";
import SearchContext from "../contexts/searchContext";
import brokenImage from "../assets/broken-image.png";

export function MoviePage() {
  const [movie, setMovie] = useState({title: ""});
  const { setList } = useContext(SearchContext);
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovieData = async () => {
      try {
      const response = await api.getMovie(id);

      if(response.data) setFilm(response.data);
      } catch(error) {
      alert(error.message);
      navigate("/");
      }
    }

    loadMovieData();     
  }, []);

  return (
    <PageWrapper>
      <MoviePageWrapper>
        <Form movie={movie} setMovie={setMovie} setList={setList} />
        <MovieContent film={film} />
      </MoviePageWrapper>
    </PageWrapper>
  );
}

function MovieContent({ film }) {
  return (
    <MovieWrapper>
      <h2>{film.Title}</h2>
      <p>{film.Plot}</p>
      <span>
        <h6>Actors</h6>
        <p>{film.Actors}</p>
      </span>
      <span>
        <h6>Rating</h6>
        <Rating rating={film.imdbRating} />
      </span>
      <Favorite film={film}/>
      <img src={film.Poster === "N/A" ? brokenImage : film.Poster} alt="Poster" />
    </MovieWrapper>
  );
}

function Rating({ rating }) {
  const n = Math.floor(Number(rating)/2);
  let stars = [];

  for(let i = 0; i < 5; i++) {
    if(i < n) stars.push(<AiFillStar />);
    else stars.push(<AiOutlineStar />);
  }
  
  return (
    <RatingWrapper>
      {stars.map((star, index) => (
        <span className="rating" key={index}>{star}</span>
      ))}
    </RatingWrapper>
  )
}

function Favorite({ film }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  if(!favorites) setFavorites([]);
  const isFavorite = favorites?.find(item => item.imdbID === film.imdbID);

  function handleClick() {
    //console.log(favorites);
    if(isFavorite) {
      const updatedFavorites = favorites.filter(item => item.imdbID !== film.imdbID);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, film];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  }

  return (
    <FavoriteButton onClick={handleClick}>
      <p>Favorite</p>
      {isFavorite 
        ? <AiFillHeart />
        : <AiOutlineHeart />
      }
    </FavoriteButton>
  );
}

const FavoriteButton = styled.button`
  width: 120px;
  height: 30px;
  border: 0;
  background-color: #070E27;
  color: #FFFFFF;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    margin: 0 !important;
    max-width: 100% !important;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`;

const MoviePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
  position: relative;

  span {
    display: flex;
    margin-top: 15px;
    max-width: calc(100% - 260px);

    p {
      max-width: 100%;
    }
  }

  span:nth-child(3) {
    margin-top: 36px;
  }

  p {
    font-size: 16px;
    line-height: 18px;
    max-width: 60%;
    max-width: calc(100% - 260px);
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
    max-width: calc(100% - 260px);
  }

  h6 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-right: 12px;
  }

  img {
    width: 230px;
    height: 345px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  height: 100;
  align-items: center;

  svg {
    height: 20px;
    width: 20px;
    color: #070E27;
  }

  span {
    margin: 0 !important;
    max-width: 100%;
  }
`;