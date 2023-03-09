import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components"; 
import api from "../services/api";

export default function Form({ movie, setMovie, setList }) {
    const location = useLocation();
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault();

        try {
          const response = await api.getMovies(movie);

          if(response.data.Search) {
            if(location.pathname !== "/") navigate("/");
            setList(response.data.Search);
          }
        } catch {
          alert("Something went wrong. Your request couldn't be completed!");
          setMovie("");
        }
      }
    
    return (
        <FormWrapper>
            <h2>Find a Movie</h2>

            <p>You can search from our extensive list of movies by typing a title on the field below. You will get informations such as actors, review and sinpose. Don't forget to add your favorite titles to your list.</p>

            <form onSubmit={handleSubmit} onReset={() => setMovie({title: ""})}>
                <input
                    type="text"
                    id="movie"
                    name="movie"
                    placeholder="Enter a movie title..."
                    value={movie.title}
                    onChange={(e) => setMovie({ title: e.target.value })}
                    required
                />
                
                <input
                    type="submit"
                    name="sarch"
                    value="Search"
                />

                <input
                    type="reset"
                    name="reset"
                    value="Reset"
                />
            </form>
        </FormWrapper>    
    );      
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 30px 0;
    color: #070E27;

    h2 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 18px;
    }

    p {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        max-width: 60%;
    }

    form {
        margin-top: 40px;
        display: flex;

        input {
            height: 16px;
            padding: 10px;
        }

        input[type="submit"],
        input[type="reset"] {
            background-color: #070E27;
            color: white;
            font-weight: 700;
            cursor: pointer;
            margin: 0 20px;
            width: 200px;
            border-radius: 10px;
            font-size: 14px;
        }

        input[type="text"] {
            border: solid 1px #070E27;
            width: 100%;
            margin-right: 20px;
        }

        input[type="text"]::placeholder {
            color: #BABABA;
            font-size: 14px;
        }
    }
`;