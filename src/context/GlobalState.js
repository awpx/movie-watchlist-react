import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer';


//initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist') 
  ? JSON.parse(localStorage.getItem('watchlist')) 
  : [] ,
  watched: localStorage.getItem('watched') 
  ? JSON.parse(localStorage.getItem('watched')) 
  : []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //save watchlist to localstorage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state]);

  //action
  const addToWatchlist = (movie) => {
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })
  };

  const removeFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id })
  }

  return (
    <div>
      <GlobalContext.Provider
        value={{
          watched: state.watched, 
          watchlist: state.watchlist,
          addToWatchlist,
          removeFromWatchlist,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  )
}
