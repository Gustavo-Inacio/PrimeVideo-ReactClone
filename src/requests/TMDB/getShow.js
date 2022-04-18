import config from "./config";

export default class GetShow {

    utils = {
        movie: {
            rating: {
                getRaw: async (movieID) => {
                    let movieInfo = await fetch(`${config.BASE_URL}/movie/${movieID}/release_dates?${config.API_KEY}&${config.LANG}`);
                    movieInfo = await movieInfo.json();
                    return movieInfo;
                },

                toArrange : (list) => {
                    let newList = {
                        id: list.id,
                        results : []
                    };
                
                    let allDataArranged = list.results.map((item) => {
                        if(!+item.release_dates[0].certification > 0)
                            return false;
                
                        const arrange = ({release_dates, ...iso}) => ({
                            ...iso,
                            rating : release_dates[0].certification
                        })
                        return arrange(item)
                    
                    });
                
                    newList.results = allDataArranged.filter(elem => elem);
                
                    return newList;
                },

                getArranged: async (movieID) => {
                    let movieInfoRaw = await this.utils.movie.rating.getRaw(movieID);
                    
                    let movieInfo = this.utils.movie.rating.toArrange(movieInfoRaw);
                
                    return movieInfo;
                }
            }
        },

        tv: {
            rating: {
                getRaw: async (TVID) => {
                    let tvRating = await fetch(`${config.BASE_URL}/tv/${TVID}/content_ratings?${config.API_KEY}&${config.LANG}`);
                    tvRating = await tvRating.json();
                    return tvRating
                }
            }
        }
    }
    
    detailed = {
        show : async(id, type, append_to_response) => {
            if(typeof id !== 'number') return;
        
            const typeSuppoerted = ['movie', 'tv'];
            if(!typeSuppoerted.includes(type)) return;
        
            let itemDetail = await fetch(`${config.BASE_URL}/${type}/${id}?${config.API_KEY}&${config.LANG}&append_to_response=${append_to_response}`);
            itemDetail = await itemDetail.json();

            let rating = null;
            if(type == 'movie')
                rating = this.utils.movie.rating.getArranged(id);
            else if(type=='tv')
                rating = this.utils.tv.rating.getRaw(id);

            return rating.then((rating) => {
                itemDetail.rating = rating;
                return itemDetail;
            });
        },

        movie : async(movieID, append_to_response) => {
            if(typeof movieID !== 'number') return;
        
            let movieDetail = await this.detailed.show(movieID, 'movie', append_to_response)
            movieDetail = await movieDetail.json();
            return movieDetail;
        }, 

        tv : async(TVID, append_to_response) => {
            if(typeof TVID !== 'number') return;
        
            let TVDetail = await this.detailed.show(TVID, 'tv', append_to_response)
            TVDetail = await TVDetail.json();
            return TVDetail;
        }

    }
}