import { useState } from 'react';
import Movies from './movies';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=f3866de6'

const App = () => {
    const [movies, setmovies] = useState([]);
    const [search,setSearch] = useState('');

    const movieSearch = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setmovies(data.Search);
    }

    const enterKeyEvent = (e) => {
        if(e.key === 'Enter') {
            movieSearch(search);
        }
    };

    return (
        <div className='app'>
            <h1>Movies</h1>
            <div className='search'>
                <input 
                    placeholder='Search here'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={enterKeyEvent}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => movieSearch(search)}
                />
            </div>

            {movies.length > 0 ? (
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
                )} 
        </div>

    );
}

export default App;