import React from 'react';
import MovieDetails from './MovieDetails';
import { Badge, Card, Button, Col} from 'react-bootstrap';
import './movie.css';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

function MovieCard({
    title, 
    type, 
    posterUrl,
    rated,
    runtime,
    genre,
    plot,
    actors,
    rating
    }) { 

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
    <div onClick={toggleModal}>

     <div style={{padding:'10px', margin:'10px'}}>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Type: 
                    <Badge bg="primary">{type}</Badge>
                </Card.Text>
                <Button variant="info">Movie Details</Button>
            </Card.Body>
        </Card>
      </div>


      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" >
        <MovieDetails 
          title2={title}
          rated2={rated}
          runtime2= {runtime}
          genre2= {genre}
          plot2= {plot}
          actors2= {actors}
          rating2= {rating}
        /> 
        <button onClick={toggleModal}>Close Modal</button>
      </Modal> 


    </div>
    )
}

export default MovieCard


