//require('dotenv').config(); 
const apikey = process.env.REACT_KEY;
console.log(apikey); 

const getMovieDetailsById = async (id) => {
    // http://www.omdbapi.com/?i=tt3896198&apikey=af984ae9
    const url = new URL("https://www.omdbapi.com");
    url.searchParams.append("apikey", apikey);
    url.searchParams.append("i", id);
    return await fetch(url);
  };
  
  const getMoviesBySearchTerm = async (term) => {
    const url = new URL("https://www.omdbapi.com");
    url.searchParams.append("apikey", apikey);
    url.searchParams.append("s", term);
    return await fetch(url);
  };

  export { getMovieDetailsById, getMoviesBySearchTerm };