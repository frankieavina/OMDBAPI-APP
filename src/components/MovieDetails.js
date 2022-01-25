import React from 'react'

function MovieDetails({
    rated,
    runtime,
    genre,
    plot,
    actors,
    rating
}) {


    return (
        <div style={{margin:'10px', width:'50vh', border:'5px solid blue'}}>
            <h3>MovieDetails</h3>
            <ul style={{listStyleType:'none'}}>
                <li>Rated: {rated}</li>
                <li>Runtime: {runtime}</li>
                <li>Genre: {genre}</li>
            </ul>

            <h5>Plot</h5>
            <p>{plot}</p>

            <h5>Actors</h5>
            <p>{actors}</p>  
        </div>
    )
}

export default MovieDetails
