import React from 'react'
import styles from './MovieCards.module.css';

function MovieCard({movie: {imdbID, Year, Poster, Title, Type} }) {
  return (
    <div className={styles.movie} key={imdbID}>
        <div>
            <p>{Year}</p>
        </div>
        <div>
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
        </div>
        <div>
            <span>{Type}</span>
            <span>{Title}</span>
        </div>
    </div>
  )
}

export default MovieCard;