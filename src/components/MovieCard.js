import React from 'react';
import MovieDetails from './MovieDetails';
import { Badge, Card, Button} from 'react-bootstrap';

function MovieCard({
    title, 
    type, 
    posterUrl,
    }) { 

    return (
     <div className="moviecard" style={{padding:'10px'}}>
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
    )
}

export default MovieCard


