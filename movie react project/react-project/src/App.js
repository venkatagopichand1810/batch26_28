import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favourite from "./components/Favourite";
import { SearchMovie } from "./api";

function App() {
  // state variables 
  const [movies, setMovies] = useState([]); // store the fetched movies from the api
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [favourite, setFavourite] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //current page of the movies displayed
  const moviesPerPage = 10;

  // handleseach funtion ...to make the api call to fetch the movies

  const handleSearch = async (searchTerm) => {
    try {
      // fetch the dtaa using the API function 
      const data = await SearchMovie(searchTerm, filter)
      // update the movie state 
      setMovies(data.Search || [])

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // useEffect to load the default movies

  useEffect(() => {
    const loadDefaultMovies = async () => {
      await handleSearch("movies")
    };
    loadDefaultMovies()
  }, [handleSearch])

  // functon to update the filter state when the user selects the filter
  const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  // funtion to update the current page for the pagination 
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  // index of the last movie of the current page
  const indexOfLastMovie = currentPage * moviesPerPage;

  // cal index of the first movie
  const indexOfFristMovie = indexOfLastMovie - moviesPerPage;

  // slice the movies array to show only the current page
  const currentMovies = movies.slice(indexOfFristMovie, indexOfLastMovie);

  // cal the total number of pages based on the movies count
  const totalPages = Math.ceil(movies.length / moviesPerPage);


  // array to hold the pagination nubmers
  const paginationNumbers = [];
  for (let i = 1; i < totalPages; i++) {
    paginationNumbers.push(i)
  }

  // condition for data loading
  // if (loading) {
  //   return <h1>Data is loading please wait</h1>
  // }

  // condition for error
  // if (error) {
  //   return <h1>Error: {error}</h1>
  // }

  return (
    <Router>
      <header>
        <h1>Movies</h1>
        <SearchBar onSearch={handleSearch} />
        <div>
          <FilterDropdown onFilterChange={handleFilterChange} />
        </div>
      </header>

      <main>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                {/* dispaly the list of movies */}
                <MovieList movies={currentMovies} />

                {/*pagination buttons */}
                <div>
                  {paginationNumbers.map((pageNumber) => (
                    <button
                      onClick={() => handlePagination(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
              </>
            } />


            {/* route for the movie details page */}

            <Route path="/movie/:id"
              element={<MovieDetail />} />
          </Routes>
        </div>
      </main>
    </Router>
  )


}


export default App