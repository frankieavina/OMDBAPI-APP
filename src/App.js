import './App.css';
import { useState, useEffect } from 'react';
import { getMovieDetailsById, getMoviesBySearchTerm } from './utils'; 
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { Nav, Navbar, Button, FormControl, Form, NavDropdown, Container } from 'react-bootstrap';

import Modal from 'react-modal';
Modal.setAppElement("#root");

function App() { 

  const [movie, setMovie] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {

    setIsLoading(true);
    // getMoviesBySearchTerm('Batman')
    getMovieDetailsById("tt3896198")
    .then((movies) => {
      console.log(movies);
      setMovie(movies)
      // setMovieList(movies.Search);  
    }); 

  }, []);


  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr/>

      <div onClick={toggleModal}>
        {movie ? (<MovieCard
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
        />
        ) : (
            <div>Loading...</div>
        )}
      </div>
      

        <hr/>
       
      < Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" >
        <MovieDetails 
          title={movie.Title}
          rated={movie.rated}
          runtime= {movie.Runtime}
          genre= {movie.Genre}
          plot= {movie.Plot}
          actors= {movie.Actors}
          rating= {movie.Rating}
        /> 
        <button onClick={toggleModal}>Close Modal</button>
      </Modal>

          <hr/>

        {/* <div className="movielist">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
          />
        ))}
      </div> */}
      

    </div>
  );
}

export default App;
