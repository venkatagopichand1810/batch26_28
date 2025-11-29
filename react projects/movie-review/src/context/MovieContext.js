import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

// Mock movie data
const mockMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: "1994",
    genre: "Drama",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
    runtime: "142 min",
    rating: 4.5
  },
  {
    id: 2,
    title: "The Godfather",
    year: "1972",
    genre: "Crime",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan",
    runtime: "175 min",
    rating: 4.7
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    runtime: "152 min",
    rating: 4.8
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: "1994",
    genre: "Crime",
    poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
    runtime: "154 min",
    rating: 4.6
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: "1994",
    genre: "Drama",
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    plot: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    director: "Robert Zemeckis",
    cast: "Tom Hanks, Robin Wright, Gary Sinise",
    runtime: "142 min",
    rating: 4.5
  },
  {
    id: 6,
    title: "Inception",
    year: "2010",
    genre: "Sci-Fi",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    runtime: "148 min",
    rating: 4.7
  },
  {
    id: 7,
    title: "The Matrix",
    year: "1999",
    genre: "Sci-Fi",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    runtime: "136 min",
    rating: 4.6
  },
  {
    id: 8,
    title: "Goodfellas",
    year: "1990",
    genre: "Crime",
    poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    director: "Martin Scorsese",
    cast: "Robert De Niro, Ray Liotta, Joe Pesci",
    runtime: "146 min",
    rating: 4.6
  },
  {
    id: 9,
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    runtime: "169 min",
    rating: 4.7
  },
  {
    id: 10,
    title: "The Lion King",
    year: "1994",
    genre: "Animation",
    poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    director: "Roger Allers, Rob Minkoff",
    cast: "Matthew Broderick, Jeremy Irons, James Earl Jones",
    runtime: "88 min",
    rating: 4.5
  },
  {
    id: 11,
    title: "Avengers: Endgame",
    year: "2019",
    genre: "Action",
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    runtime: "181 min",
    rating: 4.6
  },
  {
    id: 12,
    title: "Parasite",
    year: "2019",
    genre: "Thriller",
    poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    runtime: "132 min",
    rating: 4.7
  }
];

export const MovieProvider = ({ children }) => {
  const [movies] = useState(mockMovies);
  const [userRatings, setUserRatings] = useState(() => {
    const saved = localStorage.getItem('movie-ratings');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('movie-ratings', JSON.stringify(userRatings));
  }, [userRatings]);

  const rateMovie = (movieId, rating) => {
    setUserRatings(prev => ({
      ...prev,
      [movieId]: rating
    }));
  };

  const getUserRating = (movieId) => {
    return userRatings[movieId] || 0;
  };

  const value = {
    movies,
    rateMovie,
    getUserRating,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

