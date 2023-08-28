import '../../css/header.scss'
import React from "react";
import QuizModal from "../QuizModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareOdnoklassniki, faVk} from "@fortawesome/free-brands-svg-icons"
import Button from "../Button";

function Header(props) {
    const link = ''
    return (
        <>
            {props.contacts.length > 0 &&
                <div className="header-wrapper">
                    <div className="container">
                        <div className="contacts">
                            <div>
                                <span>Позвоните нам:</span>
                                <a href={props.contacts[0]['phone_clickable']}>{props.contacts[0]['phone']}</a>
                            </div>
                            <div>
                                <span>Напишите нам:</span>
                                <a href={props.contacts[0]['odnoklassniki']} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faSquareOdnoklassniki}/>
                                </a>
                                <a href={props.contacts[0]['vk']} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faVk}/>
                                </a>
                            </div>
                        </div>
                        <div className="main-header">
                            <div className="main-header__left">
                                <div className="tittle">
                                    <h1>{props.content[0]['slogan1']}</h1>
                                </div>
                                <div className="subtittle">
                                    <p>{props.content[0]['slogan2']}</p>
                                </div>
                                <Button setModalActive={props.setModalActive}/>
                            </div>
                            <div className="main-header__right">
                                <img alt='girls' src={props.content[0]['pic']}/>
                            </div>
                        </div>
                        <QuizModal active={props.modalActive} setActive={props.setModalActive} link={link}/>
                    </div>
                </div>
            }
        </>
    )
}

export default Header