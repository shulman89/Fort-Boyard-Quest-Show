import YellowStripe from "../YellowStripe";
import {Link} from "react-router-dom";
import VdrSecondBody from "../vdr/VdrSecondBody";
import YandexComments from "../YandexComments";
import YoutubeApi from "../YoutubeApi";
import BodyThird from "../landingPage/BodyThird";
import BodyFourth from "../landingPage/BodyFourth";
import BodyFifth from "../landingPage/BodyFifth";
import Footer from "../landingPage/Footer";
import React from "react";
import VypHeader from "./VypHeader";
import VypFirstBody from "./VypFirstBody";

function VypPage(props) {
    const link = 'vyp'
    return (
        <div className={props.modalActive || props.bodyModalActive ? "wrapper-blocked" : "wrapper"}>
            <VypHeader
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
            <VypFirstBody
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

export default VypPage