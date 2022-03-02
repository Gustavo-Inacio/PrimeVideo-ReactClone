import React, { useEffect, useState } from 'react'
import { getMovieList } from '../../requests/TMDB/getData';
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
      let list = await getMovieList(query);
      return {title: 'Amazon Original', list : list};
    };

    const amazonOriginals = await reqAmazonOriginals();
    list.push(amazonOriginals);
    list.push(amazonOriginals);

    setMovieLists(list);
  }, []);


  return (
    <div className={classes.container}>
      {movieLists && movieLists.map((item) => (
        <SimpleMovieList listData={item}/>
      ))}
    </div>
  )
}

export default MainMovieDisplay