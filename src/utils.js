//require('dotenv').config(); 
const apikey = process.env.REACT_KEY;
console.log(apikey); 

const getMovieDetailsById = async (id) => {
    // http://www.omdbapi.com/?i=tt3896198&apikey=af984ae9
    const url = new URL("https://www.omdbapi.com");
    url.searchParams.append("apikey", 'af984ae9');
    url.searchParams.append("i", id);

    const data = await fetch(url);
    const movie = await data.json(); 

    return movie ; 
  };
  
  const getMoviesBySearchTerm = async (term) => {
    const url = new URL("https://www.omdbapi.com");
    url.searchParams.append("apikey", 'af984ae9');
    url.searchParams.append("s", term);

    const data = await fetch(url);
    const movies = await data.json();

    return movies; 
  };

  export { getMovieDetailsById, getMoviesBySearchTerm };