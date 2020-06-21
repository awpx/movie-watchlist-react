import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCard = ({movie}) => {
  const {addToWatchlist, watchlist} = useContext(GlobalContext);

  let storedMovie = watchlist.find((object) => object.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

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
        </div>
      </div>
      
    </div>
  )
}
