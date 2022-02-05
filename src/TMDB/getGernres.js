const getGenres = () => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_KEY}`);
    response = response.json();
    return response
}

export default getGenres;