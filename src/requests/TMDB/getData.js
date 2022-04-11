const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `api_key=${process.env.REACT_APP_KEY}`;
const LANG = `language=en-US`;

export const getMovieList = async (query = {}) => {
    // query= {
    //     with_genres : 'action'
    // }

    let stringQuery = '';
    for(let i in query){
        stringQuery += `&`;
        stringQuery += `${i}=${query[i]}`;
    }

    let movieList = await fetch(`${BASE_URL}/discover/movie?${API_KEY}${stringQuery}&${LANG}`);
    movieList = await movieList.json();
    return movieList;
}

export const getGenres = async() => {
    let genresList = await fetch(`${BASE_URL}/genre/movie/list?${API_KEY}&${LANG}`);
    genresList = genresList.json();
    return genresList;
}

export const getMovieDetail = async(movieID, append_to_response) => {
    if(typeof movieID !== 'number') return;

    let movieDetail = await fetch(`${BASE_URL}/movie/${movieID}?${API_KEY}&${LANG}&append_to_response=${append_to_response}`);
    movieDetail = await movieDetail.json();
    return movieDetail;
}

export const getMovieReleaseRating = async (movieID) => {
    let movieInfo = await fetch(`${BASE_URL}/movie/${movieID}/release_dates?${API_KEY}&${LANG}`);
    movieInfo = await movieInfo.json();
    return movieInfo;
};

export const getDetailedMovieList = async(query = {}, append_to_response = '') => {
    let movieList = await getMovieList(query);
    movieList = movieList.results;

    const detailedMovies = Promise.all([
        Promise.all(movieList.map(movie => getMovieDetail(movie.id, append_to_response))),
        Promise.all(movieList.map(movie => getMovieReleaseRating(movie.id))),
    ]).then(movies => {
        let detailedMovieList = [];
        for(let i = 0; i < movies[1].length && movies[0].length; i++){
            movies[0][i].release_and_ageRating = movies[1][i];
            detailedMovieList.push(movies[0][i])
        }
        
        return detailedMovieList;
    });

  
    return detailedMovies;
}

export const getTrending = async(type = 'all', time_window = 'week') => {
    let trendingList = await fetch(`${BASE_URL}/trending/${type}/${time_window}?${API_KEY}&${LANG}`);
    trendingList = await trendingList.json();
    return trendingList;
}