import React from 'react';
import { useEffect } from 'react';

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

    const movieSearch = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
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

            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{oneMovie.Year}</p>
                    </div>
                    <div>
                        <img src={oneMovie.Poster !== 'N/A' ? oneMovie.Poster : 'https://via.placeholder.com/400'}
                             alt={oneMovie.Title}
                        />
                    </div>
                    <div>
                        <span>{oneMovie.Type}</span>
                        <h3>{oneMovie.Title}</h3>
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default App;