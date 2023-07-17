import React from 'react';
import { useEffect } from 'react';
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
                <Movies oneMovie = {oneMovie} />
            </div>
        </div>

    );
}

export default App;