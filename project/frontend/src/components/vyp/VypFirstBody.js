import React, {useState} from "react";
import fortLogo from "../../media/landing/fort-logo.png";
import FB2_image from "../../media/vip/FB2_image.png";
import BookingDateModal from "../BookingDateModal";

function CorpFirstBody({link,bodyModalActive,setBodyModalActive}) {
    return (
        <div className="bodyFirst-wrapper">
            <div className="bodyFirst-container">
                <div className="bodyFirst-banner__left">
                    <div className="fb-logo">
                        <img src={fortLogo} alt={fortLogo}/>
                    </div>
                    <div className="title">
                        <p>Новые испытания
                            <span> в декорациях и атмосфере всемирного телешоу</span>
                        </p>
                    </div>
                    <div className="subtitle-one">
                        <p>Вместо обычного выпускного – увлекательное приключение для всего класса по мотивам всемирно
                            известного телешоу.
                            Вас ждет шоу в формате командной соревновательной игры с испытаниями в лабиринтах, погоне за
                            ключами сокровищницы и
                            загадками, которые оставят в восторге каждого. И не забывайте – все это под чутким
                            наблюдением Мэтра Теней, Старца Фуры и Паспорту.</p>
                    </div>
                    <div className="subtitle-two">
                        <p>Отправляйтесь на знакомство с <span>популярными героями ТВ-шоу </span>и бросьте вызов,
                            победив в непростых испытаниях.</p>
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
                        <img src={FB2_image} alt='FB2_image'/>
                </div>
            </div>
            <BookingDateModal active={bodyModalActive} setActive={setBodyModalActive} link={link}/>
        </div>
    )
}

export default CorpFirstBody