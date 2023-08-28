import DdrHeader from "./DdrHeader";
import YellowStripe from "../YellowStripe";
import {Link} from "react-router-dom";
import BodyFirst from "../landingPage/BodyFirst";
import BodySecond from "../landingPage/BodySecond";
import YandexComments from "../YandexComments";
import YoutubeApi from "../YoutubeApi";
import BodyThird from "../landingPage/BodyThird";
import BodyFourth from "../landingPage/BodyFourth";
import BodyFifth from "../landingPage/BodyFifth";
import Footer from "../landingPage/Footer";
import React from "react";

function DdrPage(props) {
    const link = 'ddr'
    return (
        <div className={props.modalActive || props.bodyModalActive ? "wrapper-blocked" : "wrapper"}>
            <DdrHeader
                contacts={props.contacts}
                setModalActive={props.setModalActive}
                modalActive={props.modalActive}
            />
            <YellowStripe
                className="yellowstripe"
                contacts={props.contacts}
                setModalActive={props.setModalActive}
                urls={props.urls}
            />
            <Link to={props.contacts[0]['whatsapp']} target="_blank" rel="noopener noreferrer">
                <div className="questions">
                    <button>Ocтались вопросы? Oтветим в Whatsapp</button>
                </div>
            </Link>
            <BodyFirst
                link={link}
                bodyModalActive={props.bodyModalActive}
                setBodyModalActive={props.setBodyModalActive}
            />
            <BodySecond/>
            <YandexComments urls={props.urls}/>
            <YoutubeApi/>
            <BodyThird/>
            <BodyFourth/>
            <BodyFifth/>
            <Footer contacts={props.contacts}/>
        </div>
    )
}

export default DdrPage