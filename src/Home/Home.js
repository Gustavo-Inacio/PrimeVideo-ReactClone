import React, { useEffect , useState } from 'react';
import SliderItem from '../BannerSlider/SliderItem/SliderItem';
import BannerSlider from '../BannerSlider/BannerSlider';

import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'

import { getDetailedMovieList, getMovieDetail, getMovieList } from '../TMDB/getData';
import BannerItem from '../BannerSlider/BannerItem/BannerItem';

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
          
          <BannerSlider controls={true}>
            {bannerList && 
              bannerList.map((item) => {
                return(
                  <SliderItem key={item.id} >
                      <BannerItem
                        key={item.id}
                        link={'/minhacsa'}
                        backdrop_path = {`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                        info={item}
                      />
                  </SliderItem>
                )
              })
              
            }
          </BannerSlider>

          <PrimaryButton>Play Season 1</PrimaryButton>
        </div>
        
    </div>
  );
}
