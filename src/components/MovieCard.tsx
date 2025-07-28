import { useMovieContext } from '../contexts/MovieContext';
import '../css/MovieCard.css'
import type { IMovie } from '../Interfaces/IMovie';

function MovieCard(movie: IMovie) {
  // As all the content of app.tsx is wrapped in the MovieProvider context
  // We can access the state managed by the MovieContext from any component
  const { addToFavorite, removeFromFavorites, isFavorite } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: React.MouseEvent /*e: any*/) {
    e.preventDefault(); // Stops the default browser behavior (like reloading the page on submit)
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorite(movie);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
