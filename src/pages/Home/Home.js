import React, { useEffect , useState } from 'react';

import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton'
import { getDetailedMovieList, getMovieDetail, getMovieList } from '../../requests/TMDB/getData';
import TopBanner from '../../components/TopBanner/TopBanner';

export default function Home() {

  const [isMuted, setIsMuted] = useState(true);

  return (
    <div>
        <div style={{width: '100vw'}}>
          <TopBanner isMuted={isMuted} setIsMuted={setIsMuted}/>

          <PrimaryButton>Play Season 1</PrimaryButton>
        </div>
        
    </div>
  );
}
