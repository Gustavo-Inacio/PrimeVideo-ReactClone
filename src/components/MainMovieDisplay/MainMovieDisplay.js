import React, { useEffect, useState } from 'react'
import movieProviders from '../../assets/variables/movieProviders';
import { getDetailedMovieList, getMovieList } from '../../requests/TMDB/getData';
import EditMovieList from '../MovieLists/EditMovieList/EditMovieList';
import MovieListBrain from '../MovieLists/MovieListBrain/MovieListBrain';
import SimpleMovieList from '../MovieLists/SimpleMovieList/SimpleMovieList'
import classes from './MainMovieDisplay.module.scss'

function MainMovieDisplay() {
  const [movieLists, setMovieLists] = useState(null);

  useEffect(async () => {
    let list = [];
    const reqAmazonOriginals = async () => {
      const query = {
        with_companies: '20580'
      }
      let list = await getDetailedMovieList(query);

      return {
        watchProvider : movieProviders['prime'],
        title: 'Amazon Original', 
        list : list
      };
    };

    const amazonOriginals = await reqAmazonOriginals();
    list.push(amazonOriginals);

    setMovieLists(list);
  }, []);

  const reqHabdker = async  () => {
    let list = [];
    const reqAmazonOriginals = async () => {
      const query = {
        with_companies: '20580'
      }
      let list = await getDetailedMovieList(query);

      return {
        watchProvider : movieProviders['paramount'],
        title: 'Amazon Original', 
        list : list
      };
    };

    const amazonOriginals = await reqAmazonOriginals();
    list.push(amazonOriginals);

    setMovieLists(prev => [
        ...prev, ...list
    ]);
  }

  const callToRequest = async () => {
      const query = {
        with_companies: '20580'
      }
      let list = await getDetailedMovieList(query);

      return {
        watchProvider : movieProviders['prime'],
        title: 'Amazon Original', 
        list : list
      };
    };


  return (
    <div className={classes.container}>
      <MovieListBrain listRequest={callToRequest} edit/>
      <MovieListBrain listRequest={callToRequest} edit/> 

      <button onClick={reqHabdker}>REQUEST</button>
    </div>
  )
}

export default MainMovieDisplay