import React, { useEffect, useState } from 'react'
import EditMovieList from '../EditMovieList/EditMovieList';
import SimpleMovieList from '../SimpleMovieList/SimpleMovieList';

// This comeponent decides where to use a especific type of list based on the props recived
/* Props
    listRequest() -> a function which returns the all the movie list data.
    edit -> chose the <EditMovieList /> to render
*/
function MovieListBrain({listRequest, edit, ...props}) {

    const [movieList, setMovieList] = useState(null);

    useEffect(async() => { // execute the request
        let list = await listRequest();
        setMovieList(list);
    }, []);
    
  return (
    movieList ? 
        edit ? 
            <EditMovieList listData={movieList} setListData={setMovieList}/>
        :
            <SimpleMovieList listData={movieList}/>
    : null

  )
}

export default MovieListBrain