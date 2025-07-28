import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css'
import { getPopularMovies, getSearchMovies } from "../services/moviesService";
import type { IMovie } from "../Interfaces/IMovie";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement> /*e: any*/) => {
    e.preventDefault(); // Stops the default browser behavior (like reloading the page on submit)
    
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResult = await getSearchMovies(searchQuery);
      setMovies(searchResult);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...")
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && (<div className="error-message">{error}</div>)}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="home">
          <div className="movies-grid">
            {movies.map((movie) => (
              // movie.title.toLowerCase().startsWith(searchQuery) &&
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
              ></MovieCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
