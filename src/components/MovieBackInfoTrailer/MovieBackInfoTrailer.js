import React, { useEffect, useRef, useState } from 'react';
import { SoundToggler } from '../UI/Button/MyButton';
import classes from './MovieBackInfoTrailer.module.css';


function MovieBackInfoTrailer({info, style, movieID, muted,setIsMuted,  ...props}) {

    const playerRef = useRef(null);
    const [videoID, setVideoID] = useState(movieID);

    const onPlayerReady = e => {
        e.target.playVideo();
        if(!muted) 
            e.target.unMute();
        else
            e.target.mute();

            console.log(window.YT)
    }
    const onPlayerChange = (e) => {
        if(e.target.isMuted() & muted) e.target.mute();
        else e.target.unMute();
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
                'mute': muted,
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

    
    const soundTogglerHandler = () => {
        setIsMuted(prev => {
            if(playerRef.current.u){
                if(prev && playerRef.current.isMuted()) playerRef.current.unMute();
                else playerRef.current.mute();
            }
            return !prev
        });
    }
 
  return (
    <div className={classes.videoBackground} >
        <SoundToggler className={classes.soundToggler} onClick={soundTogglerHandler} muted={muted}/>
        <div className={classes.cvideoForeground} >
            <div id={`yt-player-${videoID}`} ></div>
        </div>
    </div>
  );
}

export default MovieBackInfoTrailer;
