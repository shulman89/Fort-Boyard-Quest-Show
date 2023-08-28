import "../../css/bodyFirst.scss"
import "../../css/landingPage.scss"
import React, {useState} from "react";
import BookingDateModal from "../BookingDateModal";
import fortLogo from "../../media/landing/fort-logo.png"
import fbBoys from "../../media/landing/FB_boys.png"


function BodyFirst({link,bodyModalActive,setBodyModalActive}) {
    return (
        <div className="bodyFirst-wrapper">
            <div className="bodyFirst-container">
                <div className="bodyFirst-banner__left">
                    <div className="fb-logo">
                        <img src={fortLogo} alt={fortLogo}/>
                    </div>
                    <div className="title">
                        <p>Вместо обычного праздника –
                            <span> увлекательное командное приключение</span> по мотивам всемирно известного
                            телешоу
                        </p>
                    </div>
                    <div className="subtitle-one">
                        <p>Вас ждет шоу в формате командной соревновательной игры с испытаниями в лабиринтах,
                            погоне за ключами сокровищницы и загадками, которые оставят в восторге каждого.
                            И не забывайте – все это под чутким наблюдением Мэтра Теней, Старца Фуры и
                            Паспорту.</p>
                    </div>
                    <div className="body-button-container">
                        <button
                            onClick={() => setBodyModalActive(true)}
                            className="button"
                        >
                            Забронировать дату
                        </button>
                    </div>
                </div>
                <div className="bodyFirst-banner__right">
                        <img src={fbBoys} alt='fbBoys'/>
                </div>
            </div>
            <BookingDateModal active={bodyModalActive} setActive={setBodyModalActive} link={link}/>
        </div>
    )
}

export default BodyFirst