import React, { useEffect, useState } from 'react'
import BannerItem from '../BannerSlider/BannerItem/BannerItem';
import BannerSlider from '../BannerSlider/BannerSlider';

import { getDetailedMovieList, getMovieDetail, getMovieList } from '../../requests/TMDB/getData';
import SliderItem from '../../components/BannerSlider/SliderItem/SliderItem';

function TopBanner() {

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
    )
}

export default TopBanner