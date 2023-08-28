import "../css/yellowStripe.scss"
import React, {useState} from "react";
import rublev_family_logo from "../media/landing/fb.png"
import hat from "../media/landing/hat.png"
import balloons from "../media/landing/balloons.png"
import microphone from "../media/landing/microphone.png"
import birthday from "../media/landing/birthday.png"
import otzivy from "../media/landing/otzivy.png"
import CarouselModal from "./CarouselModal";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faPenToSquare, faImage} from "@fortawesome/free-regular-svg-icons"
import {faBars, faPhone} from "@fortawesome/free-solid-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";


function GraduateIcon(props) {
    return (
        <div className="photo-stripe__card-container"
             onClick={() => {
                 !props.carouselActive && props.setCarouselActive(true);
                 props.setChoice("graduation")
             }}
        >
            <div className="card-photo">
                <img src={hat} alt="hat"/>
            </div>
            <div className="card-title">
                <p>Выпускной</p>
            </div>
        </div>
    )
}

function HolidayIcon(props) {
    return (
        <div className="photo-stripe__card-container"
             onClick={() => {
                 !props.carouselActive && props.setCarouselActive(true);
                 props.setChoice("holiday")
             }}
        >
            <div className="card-photo">
                <img src={balloons} alt="balloons"/>
            </div>
            <div className="card-title">
                <p>Праздники</p>
            </div>
        </div>
    )
}

function CorporateIcon(props) {
    return (
        <div className="photo-stripe__card-container"
             onClick={() => {
                 !props.carouselActive && props.setCarouselActive(true);
                 props.setChoice("corporate")
             }}
        >
            <div className="card-photo">
                <img src={microphone} alt="microphone"/>
            </div>
            <div className="card-title">
                <p>Корпоративы</p>
            </div>
        </div>
    )
}

function BirthdayIcon(props) {
    return (
        <div className="photo-stripe__card-container"
             onClick={() => {
                 !props.carouselActive && props.setCarouselActive(true);
                 props.setChoice("birthday")
             }}>
            <div className="card-photo">
                <img src={birthday} alt="birthday"/>
            </div>
            <div className="card-title">
                <p>День рождения</p>
            </div>
        </div>
    )
}

function OtzivyIcon(props) {
    return (
        <div className="photo-stripe__card-container"
             onClick={() => {
                 !props.carouselActive && props.setCarouselActive(true);
                 props.setChoice("videootzivy")
             }}>
            <div className="card-photo">
                <img src={otzivy} alt="otzivy"/>
            </div>
            <div className="card-title">
                <p>Отзывы</p>
            </div>
        </div>
    )
}

function YellowStripe(props) {
    const [carouselActive, setCarouselActive] = useState(false);
    const [choice, setChoice] = useState('graduation')

    const eventData = {
        graduation: {
            title: "Устройте вашим детям ",
            titlespan: "незабываемый выпускной!",
            subtitle: "Выпускной бывает раз в жизни. Проведите его в формате, у которого нет аналогов в России. " +
                "Вчерашние школьники станут героями увлекательной игры по мотивам знаменитых франшиз."
        },
        holiday: {
            title: "Ломаете голову, ",
            titlespan: "как провести вечеринку?",
            subtitle: "Время приключений настало! Окунитесь в незабываемый мир веселья, организовываем любые праздники " +
                "для взрослых и детей или всех вместе." +
                "Масштабная площадка поразит вас атмосферой! Бесплатно бронируйте праздник уже сейчас."
        },
        corporate: {
            title: "Мы организуем для вас ",
            titlespan: "уникальный праздник",
            subtitle: "Окунись в атмосферу приключений в компании коллег. Дискотека с ведущим и диджеем, банкет с " +
                "угощениями по вкусу заказчика - то,что сделает мероприятие незабываемым. Не упускайте шанс, " +
                "забронируйте удобные даты уже сейчас!"
        },
        birthday: {
            title: "Детский день рождения ",
            titlespan: "не по шаблону",
            subtitle: "Головоломки и задания, интересные детям, невероятная атмосфера. В суете повседневных забот вы " +
                "лихорадочно пытаетесь придумать что-нибудь «этакое»: Аниматоров приглашали, в цирк ходили, надувные " +
                "шары и клоуны были…"
        },
        videootzivy: {
            title: "",
            titlespan: "",
            subtitle: "Посмотрите отзывы людей, которые уже прошли все испытания и загадки наших квест-шоу. " +
                "Дети и взрослые просто в восторге! Равнодушных нет. Такой яркий праздник с любимыми героями и" +
                " увлекательными заданиями запомнится навсегда."
        },
    }

    return (
        <>
{/*---------------------------------------------компьютерная версия--------------------------------------------------*/}
            <div className="yellow-stripe">
                <div className="photo-stripe__left">
                    <div className="photo-stripe__label">
                        <img src={rublev_family_logo} alt={'rb-logo'}/>
                    </div>
                    <div className="photo-stripe__title">
                        <p>Незабываемые праздники и командные игры для детей и взрослых</p>
                    </div>
                </div>
                <div className="photo-stripe__right">
                    <GraduateIcon carouselActive={carouselActive} setCarouselActive={setCarouselActive}
                                  setChoice={setChoice}/>
                    <HolidayIcon carouselActive={carouselActive} setCarouselActive={setCarouselActive}
                                 setChoice={setChoice}/>
                    <CorporateIcon carouselActive={carouselActive} setCarouselActive={setCarouselActive}
                                   setChoice={setChoice}/>
                    <BirthdayIcon carouselActive={carouselActive} setCarouselActive={setCarouselActive}
                                  setChoice={setChoice}/>
                    <OtzivyIcon carouselActive={carouselActive} setCarouselActive={setCarouselActive}
                                  setChoice={setChoice}/>
                </div>

{/*--------------------------------------------Мобильная версия----------------------------------------------*/}

                <div className="yellow-stripe-mobile">
                     <div className="nav-button" onClick={() => {setCarouselActive(true);setChoice('videootzivy')}
                    }>
                        <FontAwesomeIcon icon={faCommentDots} style={{fontSize: "20px"}}/><p>Отзывы</p>
                    </div>
                    <Link to={props.contacts[0]['phone_clickable']} target="_blank"
                          className="nav-button">
                        <FontAwesomeIcon icon={faPhone} style={{fontSize: "20px", color: "black"}}/>
                        <p>Позвонить</p>
                    </Link>

                    <div className="nav-button" onClick={() => props.setModalActive(true)
                    }>
                        <FontAwesomeIcon icon={faPenToSquare} style={{fontSize: "20px"}}/><p>Расчитать</p>
                    </div>
                    <div className="nav-button" onClick={() => setCarouselActive(true)
                    }>
                        <FontAwesomeIcon icon={faImage} style={{fontSize: "20px"}}/><p>Галерея</p>
                    </div>
                    <Link to={props.contacts[0]['whatsapp']} target="_blank"
                          className="nav-button">
                        <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: "20px"}}/><p>WhatsApp</p>
                    </Link>
                    <div className="drop">
                        <Dropdown>
                            <Dropdown.Toggle style={{fontSize: "0px"}} variant="">
                                <FontAwesomeIcon style={{color: "black", fontSize: "20px"}} icon={faBars}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/vyp">Выпускной</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="/vdr">Взрослый день рождения</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="/corp">Корпоротивы</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="/ddr">Детский день рождения</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="/">Главная</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
{/*---------------------------------------------модальное окно-------------------------------------------------------*/}
            <CarouselModal
                carouselActive={carouselActive}
                setCarouselActive={setCarouselActive}
                setModalActive={props.setModalActive}
                choice={choice}
                setChoice={setChoice}
                eventData={eventData}
            >
                <GraduateIcon setCarouselActive={setCarouselActive} setChoice={setChoice}/>
                <HolidayIcon setCarouselActive={setCarouselActive} setChoice={setChoice}/>
                <CorporateIcon setCarouselActive={setCarouselActive} setChoice={setChoice}/>
                <BirthdayIcon setCarouselActive={setCarouselActive} setChoice={setChoice}/>
                <OtzivyIcon setCarouselActive={setCarouselActive} setChoice={setChoice}/>
            </CarouselModal>
        </>
    )
}

export default YellowStripe