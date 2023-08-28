import "../css/modal.scss"
import "../css/carousels.scss"
import "../css/header.scss"
import "../css/yellowStripe.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import Button from "./Button";
import axios from "axios";
import {Carousel} from "react-bootstrap";
import ReactPlayer from "react-player";
import LinkToBackEnd from "./LinkToBackEnd";

function CarouselModal(props) {
    const [photoArray, setPhotoArray] = useState([]);
    const [videoPlay1, setVideoPlay1] = useState(false)
    const [videoPlay2, setVideoPlay2] = useState(false)
    const [videoPlay3, setVideoPlay3] = useState(false)
    const [videoPlay4, setVideoPlay4] = useState(false)
    const [videoPlay5, setVideoPlay5] = useState(false)
    const [videoPlay6, setVideoPlay6] = useState(false)
    const [videoPlay7, setVideoPlay7] = useState(false)
    const [videoPlay8, setVideoPlay8] = useState(false)
    const [videoPlay9, setVideoPlay9] = useState(false)
    const [videoPlay10, setVideoPlay10] = useState(false)


    useEffect(() => {
        axios
            .get(`${LinkToBackEnd()}/${props.choice}/`)
            .then((response) => {
                setPhotoArray(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.choice]);

    function switchOffVideo() {
        videoPlay1 && setVideoPlay1(false);
        videoPlay2 && setVideoPlay2(false);
        videoPlay3 && setVideoPlay3(false);
        videoPlay4 && setVideoPlay4(false);
        videoPlay5 && setVideoPlay5(false);
        videoPlay6 && setVideoPlay6(false);
        videoPlay7 && setVideoPlay7(false);
        videoPlay8 && setVideoPlay8(false);
        videoPlay9 && setVideoPlay9(false);
        videoPlay10 && setVideoPlay10(false);
    }

    return (
        <div className={props.carouselActive ? "modal active" : "modal"} onClick={() => props.setCarouselActive(false)}>
            <div
                className={props.carouselActive ? "modal__carousel-content active" : "modal__carousel-content"}
                onClick={
                    e => e.stopPropagation()
                }
            >
                <div className={"modal-x-carousel"}
                     onClick={() => {
                         props.setCarouselActive(false);
                         switchOffVideo()
                     }
                     }>
                    <FontAwesomeIcon icon={faXmark} className="x-icon-carousel"/>
                </div>

                <div className={"carousel-header"}>
                    {
                        props.eventData[props.choice]["titlespan"] &&
                        <p className="carousel-header__title">
                            {props.eventData[props.choice]["title"]}<span>{props.eventData[props.choice]["titlespan"]}</span>
                        </p>
                    }
                    {
                        props.eventData[props.choice]['subtitle'] &&
                        <p className="carousel-header__subtitle">
                            {props.eventData[props.choice]['subtitle']}
                        </p>
                    }
                    <div onClick={()=>switchOffVideo()}>
                        <Button
                            setModalActive={props.setModalActive}
                            setCarouselActive={props.setCarouselActive}
                            carouselActive={props.carouselActive}
                        />
                    </div>

                </div>
                {props.choice === 'videootzivy' ?
                    <div className="carousel-body video">
                        <Carousel
                            onSelect={switchOffVideo}
                            indicators={true}
                            className={"carousel-body_window"}
                            slide={false}
                            fade={false}
                            interval={null}
                            touch={true}
                        >
                            {
                                photoArray[0] &&
                                <Carousel.Item>
                                    <ReactPlayer
                                        url={photoArray[0]['video_url']}
                                        width='100%'
                                        playing={videoPlay1}
                                        muted={false}
                                        controls={false}
                                        onPlay={() => {
                                            setVideoPlay1(true)
                                        }}
                                    />
                                </Carousel.Item>
                            }{
                            photoArray[1] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[1]['video_url']}
                                    width='100%'
                                    playing={videoPlay2}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay2(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[2] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[2]['video_url']}
                                    width='100%'
                                    playing={videoPlay3}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay3(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[3] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[3]['video_url']}
                                    width='100%'
                                    playing={videoPlay4}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay4(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[4] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[4]['video_url']}
                                    width='100%'
                                    playing={videoPlay5}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay5(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[5] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[5]['video_url']}
                                    width='100%'
                                    playing={videoPlay6}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay6(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[6] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[6]['video_url']}
                                    width='100%'
                                    playing={videoPlay7}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay7(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[7] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[7]['video_url']}
                                    width='100%'
                                    playing={videoPlay8}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay8(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[8] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[8]['video_url']}
                                    width='100%'
                                    playing={videoPlay9}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay9(true)
                                    }}
                                />
                            </Carousel.Item>
                        }{
                            photoArray[9] &&
                            <Carousel.Item>
                                <ReactPlayer
                                    url={photoArray[9]['video_url']}
                                    width='100%'
                                    playing={videoPlay10}
                                    muted={false}
                                    controls={false}
                                    onPlay={() => {
                                        setVideoPlay10(true)
                                    }}
                                />
                            </Carousel.Item>
                        }
                        </Carousel>
                    </div> :
                    <div className="carousel-body">
                        <Carousel className={"carousel-body_window"} touch={true}>
                            {photoArray.map((photo) =>
                                <Carousel.Item key={photo['id']}>
                                    <img
                                        className="d-block w-100"
                                        src={photo['image']}
                                        alt={`${props.choice}${photo['id']}`}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                }

                <div className={"carousel-footer"}>
                    <div tabIndex='1' className="carousel-footer__icon"
                         onClick={() => props.setChoice("graduation")}>{props.children[0]}</div>
                    <div tabIndex='1' className="carousel-footer__icon"
                         onClick={() => props.setChoice("holiday")}>{props.children[1]}</div>
                    <div tabIndex='1' className="carousel-footer__icon"
                         onClick={() => props.setChoice("corporate")}>{props.children[2]}</div>
                    <div tabIndex='1' className="carousel-footer__icon"
                         onClick={() => props.setChoice("birthday")}>{props.children[3]}</div>
                    <div tabIndex='1' className="carousel-footer__icon"
                         onClick={() => props.setChoice("videootzivy")}>{props.children[4]}</div>
                </div>

            </div>
        </div>
    )
}

export default CarouselModal