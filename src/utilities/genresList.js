import {getGenres} from '../requests/TMDB/getData';
let genres = null;

export const storedGenres = async () => {
    if(!genres){  
        genres = await getGenres();
    }
 
    return await genres;
}