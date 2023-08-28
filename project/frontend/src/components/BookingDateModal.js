import "../css/bodyModal.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import play from "../media/landing/play-video2.png"
import useInput from "./useInput";
import PrivacyPolicy from "./quiz/PrivacyPolicy";
import axios from "axios";
import YoutubeApi from "./YoutubeApi";
import {Link, useSearchParams} from "react-router-dom";
import LinkToBitrix from "./LinkToBitrix";
import LinkToBackEnd from "./LinkToBackEnd";
import InputMask from 'react-input-mask';

function BookingDateModal({active, setActive, link}) {
    const phone = useInput('', {empty: true, minLength: 11, isPhone: true})
    const [checked, setChecked] = useState(true);
    const [show, setShow] = useState(false);
    const [youtubeActive, setYoutubeActive] = useState(false)
    const [videoPlay, setVideoPlay] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();

    const buttonHandler = () => {
        axios.post(LinkToBitrix(), {
            fields:
                {
                    "TITLE": "Номер телефона",
                    "PHONE": [{"VALUE": phone.value, "VALUE_TYPE": "WORK"}],
                    'UTM_CAMPAIGN': `${searchParams.get("utm_campaign")}`,
                    'UTM_SOURCE': `${searchParams.get("utm_source")}`,
                    'UTM_CONTENT': `${searchParams.get("utm_content")}`,
                    'UTM_MEDIUM': `${searchParams.get("utm_medium")}`,
                    'UTM_TERM': `${searchParams.get("utm_term")}`,
                },
            params: {"REGISTER_SONET_EVENT": "Y"}
        })
            .catch(function (error) {
                console.log(error);
            });
        axios.post(`${LinkToBackEnd()}/order/`, {
            "phone_number": phone.value,
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div
                className={active ? "bodyModal__content active" : "bodyModal__content"} onClick={
                e => e.stopPropagation()
            }
            >
                <div onClick={() => setActive(false)} style={{justifySelf: 'flex-start',top: '0', alignSelf: 'flex-end', color: '#FCD977'}}>
                    <FontAwesomeIcon icon={faXmark} className="x-icon"/>
                </div>

                <div className='leave-phone'>
                    <p>Скорее оставляйте свой номер!</p>
                </div>
                <div className="book-date">
                    <p><span>Бронируйте</span> дату заранее</p>
                </div>
                {(phone.dirty && phone.empty) &&
                    <div style={{color: "white", fontWeight: '100'}}>Это поле не может быть пустым</div>}
                {(!phone.empty && phone.phoneError) &&
                    <div style={{color: "white", fontWeight: '100'}}>Некорректный номер телефона</div>}
                <div className="booking-form">
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        alwaysShowMask='true'
                        name="phone"
                        className='input-phone'
                        type="text"
                        value={phone.value}
                        onChange={e => phone.onChange(e)}
                        onBlur={e => phone.onBlur(e)}
                    />

                    <Link className={(!checked || !phone.inputValid) ? "booking-button-fail" : "booking-button"}
                          style={{color: 'white'}} to="/thanks" state={{from: {link}}}>
                        <div >
                            <div onClick={buttonHandler}>
                                Забронировать
                            </div>
                        </div>
                    </Link>

                </div>
                <div className="form__checkbox">
                    <input
                        style={{marginRight: "10px"}}
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div>
                        Принимаю <span/>
                        <button onClick={() => setShow(true)}>
                            условия обработки персональных данных
                        </button>
                    </div>
                </div>
                {!checked &&
                    <div style={{color: "white", fontWeight: '100'}}>Необходимо принять условия обработки персональных
                        данных</div>}
                <div className="play" onClick={() => {
                    setYoutubeActive(true);
                    setVideoPlay(true)
                }}>
                    <img src={play} alt="play"/>
                </div>
                <PrivacyPolicy show={show} setShow={setShow}/>
            </div>
            <YoutubeApi youtubeActive={youtubeActive}
                        setYoutubeActive={setYoutubeActive}
                        videoPlay={videoPlay}
                        setVideoPlay={setVideoPlay}
            />
        </div>
    )
}

export default BookingDateModal