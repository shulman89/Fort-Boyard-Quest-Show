import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactPlayer from 'react-player'


function YoutubeApi(props) {

    return (
        <div className={props.youtubeActive ? "modal active" : "modal"} onClick={() => props.setYoutubeActive(false)}>
            <div
                style={{width:'90%',height:'90%',overflow:'hidden'}}
                className={props.youtubeActive ? "bodyModal__content active" : "bodyModal__content"} onClick={
                e => e.stopPropagation()
            }
            >
                <div style={{alignSelf:'flex-end',color:'#FCD977'}}
                onClick={()=>{props.setVideoPlay(false);props.setYoutubeActive(false)}}
                >
                    <FontAwesomeIcon icon={faXmark} className="x-icon"/>
                </div>
                <ReactPlayer
                    url={'https://youtu.be/v21vyY4XZQU'}
                    height='100%'
                    width='100%'
                    playing={props.videoPlay}
                    muted={true}
                    controls={true}
                    onPlay={()=>{props.setVideoPlay(true)}}
                />
            </div>
        </div>
        )
        }

        export default YoutubeApi