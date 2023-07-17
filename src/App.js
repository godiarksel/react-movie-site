import React from 'react';
import { useEffect } from 'react';

import './App.css';
import searchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com/?apikey=f3866de6'

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

            </div>
        </div>

    );
}

export default App;