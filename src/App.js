import './App.css';
import { useState, useEffect } from 'react';
import { getMovieDetailsById, getMoviesBySearchTerm } from './utils'; 
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';

function App() { 

  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {

    setIsLoading(true);
    getMovieDetailsById("tt3896198")
    .then((movie) => {
      console.log(movie);
      setMovie(movie);  
    }); 

  }, []);


  return (
    <div className="App">

      <h3>Learn React</h3>

      {movie ? (<MovieCard
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
        />
        ) : (
            <div>Loading...</div>
        )}

      <MovieDetails 
        rated={movie.rated}
        runtime= {movie.Runtime}
        genre= {movie.Genre}
        plot= {movie.Plot}
        actors= {movie.Actors}
        rating= {movie.Rating}
      />

    </div>
  );
}

export default App;
