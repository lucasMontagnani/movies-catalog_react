// The state Manager for the Favorites Movies

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { IMovie } from "../Interfaces/IMovie";

interface MovieProviderProps {
  children: ReactNode;
}

// Define the shape of your context
interface MovieContextType {
  favorites: IMovie[];
  addToFavorite: (movie: IMovie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

// Provide a default empty context for initial value
const MovieContext = createContext<MovieContextType | undefined>(undefined);

//export const useMovieContext = useContext(MovieContext);
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

// Provide state to any of the components that are wrapped around it
export const MovieProvider = ({ children }: MovieProviderProps) => {
    const [favorites, setFavorites] = useState<IMovie[]>([]);
    
    useEffect(() => {
        // Local Storage allow us to store values directly within our browser
        const storeFavorites = localStorage.getItem("favorites");
        if (storeFavorites) setFavorites(JSON.parse(storeFavorites));
    }, []);

    // Any time the favorites state changes, we will update the content of the localstorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorite = (movie: IMovie) => {
        // To get the previous (prev) values within that state, and add another one along them (in case of a list)
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieId: number) => {
        // To get the previous (prev) values within that state
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId: number) => {
        // Return if one of the passed conditions is true
        return favorites.some(movie => movie.id === movieId);
    }

    // Provide access of these state and functions to the children that are going to use it
    const contextValues = {
      favorites,
      addToFavorite,
      removeFromFavorites,
      isFavorite  
    };

    // The children will have access to all the state that we provide inside this component
    return (
        <MovieContext.Provider value={contextValues}>
            {children}
        </MovieContext.Provider>
    );
}