import { useEffect, useState } from 'react';
import Movies from './movies';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=f3866de6'

const oneMovie ={
    "Title": "Tenet",
    "Year": "2020",
    "imdbID": "tt6723592",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setmovies] = useState([]);

    const movieSearch = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setmovies(data.Search);
    }

    useEffect(() => {
        movieSearch('Tenet');
    }, []);

    return (
        <div className='app'>
            <h1>Movies</h1>
            <div className='search'>
                <input 
                    placeholder='Search here'
                    value='Tenet'
                    onChange={() => {}}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>

            {
                movies.length > 0 ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <Movies movie= {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>
                            No movies found.
                        </h2>
                    </div>
                )
            }

            
        </div>

    );
}

export default App;