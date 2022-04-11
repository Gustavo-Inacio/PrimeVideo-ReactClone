import React, { useEffect, useState } from 'react'
import BannerSlider from '../BannerSlider/BannerSlider';

import { getDetailedMovieList} from '../../requests/TMDB/getData';

function TopBanner(props) {
    const [bannerList, setBannerList] = useState(false);

    useEffect(async () => {
        const query = {
            with_companies: '20580',
            include_video: 'true'
        }

        let detailedListRecived = await getDetailedMovieList(query, 'videos');
     
        let filteredDetailedList = detailedListRecived.filter((item) => {
            return (
                    item.backdrop_path &&
                    item.overview &&
                    item.poster_path &&
                    item.title &&
                    item.videos.results.length > 0
                )
        }).slice(0, 10);

        setBannerList(filteredDetailedList);
    }, []);


    return (
        <>
            {bannerList && 
                <BannerSlider controls={true} movieData={bannerList} isMuted={props.isMuted} setIsMuted={props.setIsMuted}/>
            }
        </>
    )
}

export default TopBanner