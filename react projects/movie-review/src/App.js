import { useState, useMemo } from 'react';
import { MovieProvider, useMovieContext } from './context/MovieContext';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import './App.css';

function AppContent() {
  const { movies } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Get unique genres and years
  const genres = useMemo(() => {
    return [...new Set(movies.map(movie => movie.genre))].sort();
  }, [movies]);

  const years = useMemo(() => {
    return [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);
  }, [movies]);

  // Filter movies
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !selectedGenre || movie.genre === selectedGenre;
      const matchesYear = !selectedYear || movie.year === selectedYear;
      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [movies, searchTerm, selectedGenre, selectedYear]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">🎬</span>
            Movie Review App
          </h1>
          <p className="app-subtitle">
            Discover, rate, and review your favorite movies
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <FilterBar
            selectedGenre={selectedGenre}
            selectedYear={selectedYear}
            onGenreChange={setSelectedGenre}
            onYearChange={setSelectedYear}
            genres={genres}
            years={years}
          />

          <div className="results-info">
            <span className="results-count">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
            </span>
          </div>

          <MovieList
            movies={filteredMovies}
            onMovieClick={setSelectedMovie}
          />
        </div>
      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <MovieProvider>
      <AppContent />
    </MovieProvider>
  );
}

export default App;
