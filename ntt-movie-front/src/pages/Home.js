import { useContext, useState } from "react";
import Form from "../components/Form";
import PageWrapper from "../styled-components/PageWrapper";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SearchContext from "../contexts/searchContext";
import brokenImage from "../assets/broken-image.png";

export function Home() {
  const [movie, setMovie] = useState({title: ""});
  const { list, setList } = useContext(SearchContext);

  return (
    <PageWrapper>
      <HomeWrapper>
        <Form movie={movie} setMovie={setMovie} setList={setList} />
        <MoviesList list={list} />
      </HomeWrapper>
    </PageWrapper>
  );
}

function MoviesList({ list }) {
  const navigate = useNavigate();
  
  if(list.length === 1) {
    const path = `/movie/${list[0].imdbID}`;
    navigate(path);
  }

  return (
    <ListWrapper>
      { list.length > 1 && (
        <>
          {list.map((movie, index) => (
            <div key={index}>
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster === "N/A" ? brokenImage : movie.Poster} alt="poster" />
              </Link>
              <h6>{movie.Title}</h6>
              <p>{movie.Year}</p>
            </div>
          ))}
        </>
      )}
    </ListWrapper>
  );
  
}

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0;
  
  div {
    width: 115px;
    margin: 10px;
  }

  img {
    width: 115px;
    height: 172.5px;
    object-fit: cover;
  }

  h6 {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin: 5px 0;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    text-align: center;
  }
`;