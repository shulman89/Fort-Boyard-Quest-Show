import "../../css/landingPage.scss"
import Header from "./Header";
import BodyFirst from "./BodyFirst";
import BodySecond from "./BodySecond";
import YandexComments from "../YandexComments";
import YoutubeApi from "../YoutubeApi";
import BodyThird from "./BodyThird";
import BodyFourth from "./BodyFourth";
import BodyFifth from "./BodyFifth";
import Footer from "./Footer";
import React from "react";
import YellowStripe from "../YellowStripe";
import {Link} from "react-router-dom";

function LandingPage(props) {
    const link = ''
    return (
        <div className={props.modalActive || props.bodyModalActive ? "wrapper-blocked" : "wrapper"}>
            <Header
                contacts={props.contacts}
                content={props.content}
                setModalActive={props.setModalActive}
                modalActive={props.modalActive}
            />
            <YellowStripe
                className="yellowstripe"
                contacts={props.contacts}
                setModalActive={props.setModalActive}
                urls={props.urls}
            />

            <BodyFirst
                link={link}
                bodyModalActive={props.bodyModalActive}
                setBodyModalActive={props.setBodyModalActive}
            />
            <Link to={props.contacts[0]['whatsapp']} target="_blank">
                <div className="questions">
                    <button>Ocтались вопросы? Oтветим в Whatsapp</button>
                </div>
            </Link>
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

export default LandingPage