import config from './config';
import GetShow from './getShow';

const getShow = new GetShow();

export const getMovieList = async (query = {}) => {
    // query= {
    //     with_genres : 'action'
    // }

    let stringQuery = '';
    for(let i in query){
        stringQuery += `&`;
        stringQuery += `${i}=${query[i]}`;
    }

    let movieList = await fetch(`${config.BASE_URL}/discover/movie?${config.API_KEY}${stringQuery}&${config.LANG}`);
    movieList = await movieList.json();
    return movieList;
}

export const getGenres = async() => {
    let genresList = await fetch(`${config.BASE_URL}/genre/movie/list?${config.API_KEY}&${config.LANG}`);
    genresList = genresList.json();
    return genresList;
}

export const getDetailedMovieList = async(query = {}, append_to_response = '') => {
    let movieList = await getMovieList(query);
    movieList = movieList.results;

    const detailedMovies = Promise.all(
        movieList.map(movie => getShow.detailed.show(movie.id, 'movie', append_to_response)),
    ).then(movies => movies);

  
    return detailedMovies;
}

export const getTrending = async(type = 'all', time_window = 'week') => {
    let trendingList = await fetch(`${config.BASE_URL}/trending/${type}/${time_window}?${config.API_KEY}&${config.LANG}`);
    trendingList = await trendingList.json();
    return trendingList;
}

export const getDetailedTrending = async(type = 'all', time_window = 'week', append_to_response = '') => {
    let trendingList = await getTrending(type, time_window);
    trendingList = trendingList.results;

    const detailedItems = Promise.all(
        trendingList.map(elem => getShow.detailed.show(elem.id, elem.media_type, append_to_response))
    ).then((shows) => shows);

    return await detailedItems;
}