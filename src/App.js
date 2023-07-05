import React from 'react';
import { useEffect } from 'react';

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

        <h1>App</h1>

    );
}

export default App;