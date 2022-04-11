import React, { useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton'
import { getDetailedMovieList, getMovieDetail, getMovieList } from '../../requests/TMDB/getData';
import TopBanner from '../../components/TopBanner/TopBanner';
import { storedGenres } from '../../utilities/genresList';
import MainMovieDisplay from '../../components/MainMovieDisplay/MainMovieDisplay';

export default function Home() {

  const [isMuted, setIsMuted] = useState(true);

  return (
    <div>
        <div style={{minHeight: '300vh', background: '#0f171e'}}>
          <TopBanner isMuted={isMuted} setIsMuted={setIsMuted}/>

          <MainMovieDisplay />
        </div>
        
    </div>
  );
}
