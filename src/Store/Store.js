import React, { useEffect, useRef } from 'react';
import classes from './Store.module.css';

function Store() {
    const playerRef = useRef(null);
    let id = `0UP-ejMMmv0`;

    const onPlayerReady = e => {
        e.target.playVideo();
    }
    const onPlayerChange = (e) => {
        console.log(e)
        e.target.playVideo();
        // e.target.unMute();
        console.log(e.target.getVolume());
    }
    

    const loadVideo = () => {
        playerRef.current = new window.YT.Player(`yt-player-${id}`,{
            videoId: id,
            playerVars: { 
                'enablejsapi': 1,
                'autoplay': 1,
                'controls': 0,
                'mute': 1,
                'allowFullScreen': 1,
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
      <div>
        <div className={classes.videoBackground} >
                
            <div className={classes.cvideoForeground} >
                <div id={`yt-player-${id}`} ></div>
            </div>
        </div>

        <div className={classes.vidtopContent}>
            <div className={classes.vidInfo}>
                <h1>YouTube Fullscreen Background Demo</h1>
                <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth. </p>
                <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of http://eol.jsc.nasa.gov/</p>
                <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
           
            </div>
        </div>
    </div>
  );
}

export default Store;
