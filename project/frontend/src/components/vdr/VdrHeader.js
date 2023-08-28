import React, {useEffect, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareOdnoklassniki, faVk} from "@fortawesome/free-brands-svg-icons";
import Button from "../Button";
import QuizModal from "../QuizModal";
import LinkToBackEnd from "../LinkToBackEnd";

function DdrHeader(props) {
    const link = 'vdr'
    const [content, setContent] = useState('initState');
    useEffect(() => {
        axios
            .get(`${LinkToBackEnd()}/content/vdr/`)
            .then((response) => {
                setContent(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {props.contacts.length > 0 &&
                <div className="header-wrapper background-ddr">
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
                                    <h1>{content[0]['slogan1']}</h1>
                                </div>
                                <div className="subtittle">
                                    <p>{content[0]['slogan2']}</p>
                                </div>
                                <Button setModalActive={props.setModalActive}/>
                            </div>
                            <div className="DDR-main-header__right">
                                <img alt='girls' src={content[0]['pic']}/>
                            </div>
                        </div>
                        <QuizModal active={props.modalActive} setActive={props.setModalActive} link={link}/>
                    </div>
                </div>
            }
        </>
    )
}

export default DdrHeader