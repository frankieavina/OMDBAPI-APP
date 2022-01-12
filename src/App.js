import './App.css';
import { getMovieDetailsById, getMoviesBySearchTerm } from './utils'; 

function App() {

  let getMovies = ()=> {

    getMovieDetailsById("tt3896198")
      .then((results) => results.json())
      .then((data) => console.log(data));

    getMoviesBySearchTerm("Star Wars")
      .then((results) => results.json())
      .then((data) => console.log(data));


  }

  return (
    <div className="App">

          <h3>Learn React</h3>
          <button onClick={getMovies()}>Console log Move by ID and Movie By Term</button> 
          
    </div>
  );
}

export default App;
