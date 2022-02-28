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

        let detailedList = await getDetailedMovieList(query, 'videos');
     
        setBannerList(detailedList);
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