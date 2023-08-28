import React, {useState} from "react";
import fortLogo from "../../media/landing/fort-logo.png";
import fbBoys from "../../media/vdr/8.png";
import BookingDateModal from "../BookingDateModal";

function CorpFirstBody({bodyModalActive,setBodyModalActive}) {
    const link = 'corp'
    return (
        <div className="bodyFirst-wrapper">
            <div className="bodyFirst-container">
                <div className="bodyFirst-banner__left">
                    <div className="fb-logo">
                        <img src={fortLogo} alt={fortLogo}/>
                    </div>
                    <div className="title">
                        <p>Игровое шоу по мотивам
                            <span> всемирно известной французской телепередачи</span>
                        </p>
                    </div>
                    <div className="subtitle-one">
                        <p>Превратите ваш корпоратив в незабываемое приключение в крепости Форт Боярд,
                            где Вас уже ждут непростые испытания, знакомые герои и праздничная атмосфера.
                            Шоу в формате командно-соревновательной игры! Задания в лабиринтах, погоня за ключами
                            сокровищницы и загадки, которые оставят в восторге каждого. И не забывайте – все это
                            под чутким наблюдением Мэтра Теней, Старца Фуры и Паспарту.</p>
                    </div>
                    <div className="subtitle-two">
                        <p>Такой <span>яркий праздник</span> с любимыми героями и увлекательными заданиями
                            <span> запомнится навсегда.</span></p>
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

export default CorpFirstBody