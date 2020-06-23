import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCard = ({movie}) => {
  const {addToWatchlist, addToWatched, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((object) => object.id === movie.id);
  let storedMovieWatched = watched.find((object) => object.id === movie.id);

  const watchlistDisabled = storedMovie 
    ? true 
    : storedMovieWatched 
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img 
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}          
          />
        ) : (
          <div className='filler-poster'> </div>
        )
        } 
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h3 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
          </h3>
        </div>

        <div className='controls'>
          <button 
            className='btn'
            disabled={watchlistDisabled} 
            onClick={() => addToWatchlist(movie)}>
              Add to Watchlist
          </button>

          <button 
            className='btn'
            disabled={watchedDisabled} 
            onClick={() => addToWatched(movie)}>
              Add to Watched
          </button>
        </div>
      </div>
      
    </div>
  )
}
