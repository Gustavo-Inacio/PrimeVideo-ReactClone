import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import BannerDotControlls from './BannerControls/BannerdotControlls/BannerDotControlls';
import BannerSequencialControlls from './BannerControls/BannerSequencialControll/BannerSequencialControlls';
import BannerItem from './BannerItem/BannerItem';
import classes from './BannerSlider.module.css';

function BannerSlider(props) {
    const [innerOffsetLeft, setInnerOffsetLeft] = useState(0);
    const [doneOffsetLeft, setDoneOffsetleft] = useState(0);

    const [activeItem, setActiveItem] = useState(0);
    const animationTime = 600; // ms
    const [animationActive, setAnimationActive] = useState(false);

    const innerStyles = {
        transform: `translateX(${innerOffsetLeft}px)`
    }
    
    const finalX = useRef(0);
    const initialX = useRef(0);
    const isPressed = useRef(false);

    const bannerRef = useRef(null);
    const bannerBouding = useRef(null);

    const innerBannerRef = useRef(null);
    const innerBannerBounding = useRef(null);

    useEffect(() => {
        bannerBouding.current = bannerRef.current.getBoundingClientRect();
        innerBannerBounding.current = innerBannerRef.current.getBoundingClientRect();
    })

    const checkBounderies = (newOffset) => {
        let offset = newOffset;

        if(newOffset >= 0) offset = 0.1;
        if(newOffset + innerBannerBounding.current.width <= bannerBouding.current.right) offset = -innerBannerBounding.current.width + bannerBouding.current.width;

        return offset;
    }

    const changeDelta = () => {
        let newOffset = doneOffsetLeft + finalX.current - initialX.current;
        
        let checkedOffset = checkBounderies(newOffset);
        if(checkedOffset)
            setInnerOffsetLeft(checkedOffset);
    }

    const getXPosition = e => {
        const mobileEvents = [ 'touchstart', 'touchend', 'touchmove'];
        // const mouseEvents = [ 'mousemove', 'mousedown', 'mouseup'];
        const mouseEvents = [];

        if(mobileEvents.includes(e.type)) return e.touches[0].pageX || e.changedTouches[0].pageX;
        else if(mouseEvents.includes(e.type)) return e.clientX;

        return NaN;
    }

    const mouseDownHandler = e => {
        let x = getXPosition(e);

        if(!isNaN(x)){
            initialX.current = x;
            finalX.current = x;
            isPressed.current = true;
        }
    }

    const mouseUpHandler = e => {
        isPressed.current = false;
        setDoneOffsetleft(innerOffsetLeft)
    }

    const mouseMoveHandler = (e) => {
        if(!isPressed.current) return;

        let x = getXPosition(e);

        if(!isNaN(x)){
            finalX.current = x;
            changeDelta();
        }
    }

    
    const moveToItem = (item) => {
        if(animationActive) return false;

        let itemPos = (innerBannerBounding.current.width / props.movieData.length) * item;
        
        let checkedOffset = checkBounderies(-itemPos);
        
        if(checkedOffset){
            // setActiveItem(item)
            setAnimationActive(true)
            finalX.current = checkedOffset;
            initialX.current = checkedOffset;
            
            setInnerOffsetLeft(checkedOffset);
            setTimeout(() => {

                setAnimationActive(false);
                setDoneOffsetleft(checkedOffset);
            }, animationTime);

            return true;
        } else{
            return false;
        }
    }

    const dotControllClickHandler = (item) => {
        setActiveItem(prev => {
            let moved = moveToItem(item);
            if(moved) return item;
            else return prev;
        });
    }
    const sequencialNextlHandler = () => {
        setActiveItem(prev => {
            let moved = moveToItem(+prev+1);
            if(moved) return +prev + 1;
            else return prev;
        });
        
    }
    const sequencialBacklHandler = () => {
        setActiveItem(prev => {
            let moved = moveToItem(+prev-1);
            if(moved) return prev -= 1;
            else return prev;
        });
    }

  return (
      <div ref={bannerRef} className={classes.bannerSlider} >
          <div ref={innerBannerRef} style={{transform :innerStyles.transform, transition : (animationActive ? `all ease ${animationTime / 1000}s` : 'none')}} className={classes.innerSlider} onTouchStart={mouseDownHandler} onMouseDown={mouseDownHandler} onTouchEnd={mouseUpHandler} onMouseUp={mouseUpHandler} onTouchMove={mouseMoveHandler} onMouseMove={mouseMoveHandler} onMouseLeave={mouseUpHandler}>
              {props.movieData && props.movieData.map((item, index) => (
                <BannerItem 
                    key={item.id}
                    link={'/minhacsa'}
                    backdrop_path = {`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    info={item}
                    isActive={(index == activeItem)}
                />
              ))}
          </div>

          <BannerDotControlls quantity={props.movieData.length} dotClicked={dotControllClickHandler} activeItem={activeItem}></BannerDotControlls>
          {activeItem > 0 &&
                <BannerSequencialControlls className={classes.sequencialControlls} onClick={sequencialBacklHandler}/>
          }
          {activeItem < props.movieData.length -1 &&
                <BannerSequencialControlls next style={{right: 0}} className={classes.sequencialControlls} onClick={sequencialNextlHandler}/>
          }
      </div>
  );
}

export default BannerSlider;
