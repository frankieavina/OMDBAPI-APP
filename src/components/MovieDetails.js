import React from 'react';
import {Card, Button} from 'react-bootstrap';

function MovieDetails({
    title2,
    rated2,
    runtime2,
    genre2,
    plot2,
    actors2,
    rating2
}) {


    return (
        <div style={{margin:'10px', width:'50vh', border:'5px solid blue', padding:'10px'}}>

            <h5>Plot</h5>
            <p>{plot2}</p>

            <h5>Actors</h5>
            <p>{actors2}</p>  


            <Card className='text-center'>
            <Card.Header>Movie Details</Card.Header>
            <Card.Body>
                <Card.Title>{title2}</Card.Title>
                <Card.Text>
                    <ul style={{listStyleType:'none'}}>
                        <li>Rated: {rated2}</li>
                        <li>Runtime: {runtime2}</li>
                        <li>Genre: {genre2}</li>
                    </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>





        </div>

        
    )
}

export default MovieDetails
