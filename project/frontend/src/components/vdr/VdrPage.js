import YellowStripe from "../YellowStripe";
import {Link} from "react-router-dom";
import YandexComments from "../YandexComments";
import YoutubeApi from "../YoutubeApi";
import BodyThird from "../landingPage/BodyThird";
import BodyFourth from "../landingPage/BodyFourth";
import BodyFifth from "../landingPage/BodyFifth";
import Footer from "../landingPage/Footer";
import React from "react";
import VdrHeader from "./VdrHeader";
import VdrFirstBody from "./VdrFirstBody";
import VdrSecondBody from "./VdrSecondBody";

function VdrPage(props) {
    const link = 'vdr'
    return (
        <div className={props.modalActive || props.bodyModalActive ? "wrapper-blocked" : "wrapper"}>
            <VdrHeader
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
            <Link to={props.contacts[0]['whatsapp']} target="_blank">
                <div className="questions">
                    <button>Ocтались вопросы? Oтветим в Whatsapp</button>
                </div>
            </Link>
            <VdrFirstBody
                link={link}
                bodyModalActive={props.bodyModalActive}
                setBodyModalActive={props.setBodyModalActive}
            />
            <VdrSecondBody/>
            <YandexComments urls={props.urls}/>
            <YoutubeApi/>
            <BodyThird/>
            <BodyFourth/>
            <BodyFifth/>
            <Footer contacts={props.contacts}/>
        </div>
    )
}

export default VdrPage