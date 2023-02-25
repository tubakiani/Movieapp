import React, { useEffect, useState } from 'react';
import styles from './MovieCards.module.css';
import searchIcon from './icons/search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=47c8a38';

function MovieCards() {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        SearchMovies("Batman")
    },[]);

    const SearchMovies = async(title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search)
    };

    return (
    <div className={styles.app}>
        <h1>MovieLand</h1>
        <div className={styles.search}>
            <input 
                type="text" 
                placeholder='search for movies'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img 
                src={searchIcon} 
                alt="icons"
                onClick={() => SearchMovies(search)}
            /> 
        </div>
        { movies.length >0 ? (
            <div>
                {movies.map((movie) => (<MovieCard movie={movie}/>))}
            </div>
        ) : (
          <div className={styles.empty}>
            <h2>No movies found</h2>
          </div>  
        )
        }

      
    </div>
  )
}

export default MovieCards