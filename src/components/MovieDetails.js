import React from 'react';
import {Card, Button} from 'react-bootstrap';

function MovieDetails({
    title,
    rated,
    runtime,
    genre,
    plot,
    actors,
    rating
}) {


    return (
        <div style={{margin:'10px', width:'50vh', border:'5px solid blue', padding:'10px'}}>

            <h5>Plot</h5>
            <p>{plot}</p>

            <h5>Actors</h5>
            <p>{actors}</p>  


            <Card className='text-center'>
            <Card.Header>Movie Details</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <ul style={{listStyleType:'none'}}>
                        <li>Rated: {rated}</li>
                        <li>Runtime: {runtime}</li>
                        <li>Genre: {genre}</li>
                    </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>

        
    )
}

export default MovieDetails
