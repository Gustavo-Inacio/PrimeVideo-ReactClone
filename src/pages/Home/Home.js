import React, { useEffect , useState } from 'react';
import SliderItem from '../../components/BannerSlider/SliderItem/SliderItem';
import BannerSlider from '../../components/BannerSlider/BannerSlider';

import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton'

import { getDetailedMovieList, getMovieDetail, getMovieList } from '../../requests/TMDB/getData';
import BannerItem from '../../components/BannerSlider/BannerItem/BannerItem';
import TopBanner from '../../components/TopBanner/TopBanner';

export default function Home() {

  const [bannerList, setBannerList] = useState(false);

  useEffect(async () => {
    const query = {
      with_companies: '20580',
      include_video: 'true'
    }
    let list = await getMovieList(query);
    list = list.results;

    list = list.filter((item) => (item.backdrop_path));
    let a = await getMovieDetail(716258);

    let detailedList = await getDetailedMovieList(query, 'videos');
    console.log('detailedLits', detailedList)
    
    setBannerList(detailedList);
    console.log(list)
    console.log(a)
  }, []);


  return (
    <div>
        <div style={{width: '100vw'}}>
          
          <TopBanner />

          <PrimaryButton>Play Season 1</PrimaryButton>
        </div>
        
    </div>
  );
}
