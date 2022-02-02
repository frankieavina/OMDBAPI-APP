import './App.css';
import { useState, useEffect } from 'react';
import { getMovieDetailsById, getMoviesBySearchTerm } from './utils'; 
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { Nav, Navbar, Button, FormControl, Form, NavDropdown, Container, Row } from 'react-bootstrap';

function App() { 

  const [movie, setMovie] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [ searchInput, setSearchInput] = useState('batman');

  console.log("Search Input:",searchInput);

  // useEffect 
  useEffect(() => {
   setIsLoading(true);
   // if empty
   if(searchInput == null )
   {
     setSearchInput('batman');
   }
   getMoviesBySearchTerm(searchInput)
    .then((movies) => {
      console.log("This is the movies",movies.Search);
      setMovieList(movies.Search);  
    }); 

  }, [searchInput]);

  // button click handler function 
  function clickHandler(){
    console.log('clicked button:',searchTerm)
    setSearchInput(searchTerm);
  }


  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">OMBD App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(event) =>{ setSearchTerm(event.target.value)} }
              />
              <Button variant="outline-success" onClick={() => clickHandler() }>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
          <div className="CardsBody">
              {movieList.map((movie) => (
                <MovieCard
                    title={movie.Title}
                    type={movie.Type}
                    posterUrl={movie.Poster}
                    rated={movie.rated}
                    runtime= {movie.Runtime}
                    genre= {movie.Genre}
                    plot= {movie.Plot}
                    actors= {movie.Actors}
                    rating= {movie.Rating}
                />
              ))} 
          </div>
 

      

    </div>
  );
}

export default App;
