import React, { useEffect, useRef, useState } from 'react';
import classes from './MovieBackInfoTrailer.module.css';


function MovieBackInfoTrailer({info, style, movieID,  ...props}) {

    console.log(info.videos)
    const playerRef = useRef(null);
    const [videoID, setVideoID] = useState(movieID);
    // let id = `0UP-ejMMmv0`;
    console.log(videoID)

    const onPlayerReady = e => {
        e.target.playVideo();
        
    }
    const onPlayerChange = (e) => {
        console.log(e)
        // e.target.playVideo();
        // e.target.unMute();
        // e.target.unMute();
        console.log(e.target.getVolume());
    }
    

    const loadVideo = () => {
        playerRef.current = new window.YT.Player(`yt-player-${videoID}`,{
            videoId: videoID,
            playerVars: { 
                height: '720',
                width: '1080',
                'enablejsapi': 1,
                'autoplay': 1,
                'controls': 0,
                'mute': 1,
                'allowFullScreen': 0,
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerChange
            }
        })
    }

    useEffect(() => {
        if(!window.YT){
            const scriptTag = document.createElement('script');
            scriptTag.src = "http://www.youtube.com/iframe_api";

            window.onYouTubeIframeAPIReady = loadVideo;

            const firstScriptTag = document.querySelectorAll('script')[0];
            firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
        }
        else{
            loadVideo();
        }
    }, []);


  return (
    <div className={classes.videoBackground} >
                
        <div className={classes.cvideoForeground} >
            <div id={`yt-player-${videoID}`} ></div>
        </div>
    </div>
  );
}

export default MovieBackInfoTrailer;
