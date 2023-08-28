import React from "react";
import '../css/modal.scss'
import {useState, useEffect} from "react";
import Game from "./quiz/Game";
import Result from "./quiz/Result";
import axios from "axios";
import card1 from "../media/landing/card1.jpg";
import card2 from "../media/landing/card2.jpg";
import card3 from "../media/landing/card3.jpg";
import card4 from "../media/landing/card4.jpg";
import card5 from "../media/landing/card5.jpg";
import LinkToBackEnd from "./LinkToBackEnd";
import LinkToBitrix from "./LinkToBitrix";
import LinkOfFrontend from "./LinkOfFrontend";
import {useSearchParams} from "react-router-dom";


const questions = [
    {
        title: 'Какой у Вас планируется праздник?',
        variants: [
            'Круто провести время',
            'День Рождения (взрослого)',
            'День Рождения (ребёнка)',
            'Корпоратив',
            'Выпускной',
            'Другое мероприятие'
        ],
        id: 0,

    },
    {
        title: 'Для кого устраиваем праздник?',
        variants: [
            'Взрослые',
            '8 - 10 лет',
            '11 - 15 лет',
            '16 и старше',
            'Смешанная команда',
        ],
        id: 1,
    },
    {
        title: 'Сколько планируется человек?',
        id: 2,
    },
    {
        title: 'Чем хотите дополнить квест-шоу?',
        img: [
            card1, card2, card3, card4, card5
        ],
        variants: [
            'Услуги фотографа и видеооператора',
            'Праздничный стол',
            'Украшение банкетной зоны',
            'Дискотека с DJ',
            'Фирменный торт'
        ],
        id: 3,
    },
    {
        title: 'В какой день устраивается праздник?',
        id: 4,
    },
];


const QuizModal = ({active, setActive, link}) => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({})
    const [content, setContent] = useState([]);
    const [date, setDate] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        axios
            .get(`${LinkToBackEnd()}/present/`)
            .then((response) => {
                setContent(response.data);
                response.data.length &&
                questions.push({
                    "title": "Какой подарок добавить к Вашему празднику?",
                    "variants": response.data.map((e) => e.var),
                    "img": response.data.map((e) => e.img),
                    "id": 5
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    const question = questions[step]
    const forward = () => {
        setStep(step + 1)
    }
    const back = () => {
        setStep(step - 1)
    }
    const specialNum = () => {
        return (
            content.length ? 6 : 5
        )
    }
    const persantage = Math.round(step / specialNum() * 100)
    const questionIndexNumber = index => {
        setStep(step + 1);
        const copy = Object.assign({}, data);
        copy[question.title] = question.variants[index];
        setData(copy);
    }
    const rangeSliderHandler = value => {
        const copy = Object.assign({}, data);
        copy[question.title] = value;
        setData(copy);
    }
    const calendarHandler = (startDate, startDateSupport) => {
        const copy = Object.assign({}, data);
        copy[question.title] = startDate;
        setData(copy);
        setDate(startDateSupport)
    }

    const formHandler = (name, phone) => {
        const copy = Object.assign({}, data);
        copy['Имя'] = name;
        copy['Номер телефона'] = phone;
        setData(copy);
    }
    const cardGrHandler = (answer) => {
        const copy = Object.assign({}, data);
        copy[question.title] = answer;
        setData(copy);
    }

    const submitHandler = () => {
            axios.post(`${LinkToBackEnd()}/order/`, {
                "guest_name": data["Имя"],
                "phone_number": data["Номер телефона"],
                "holiday_type": data["Какой у Вас планируется праздник?"],
                "guest_type": data["Для кого устраиваем праздник?"],
                "guest_qty": data["Сколько планируется человек?"],
                "additions": data["Чем хотите дополнить квест-шоу?"].toString(),
                "present": data["Какой подарок добавить к Вашему празднику?"],
                "date": data["В какой день устраивается праздник?"]
            })
                .catch(function (error) {
                    console.log(error);
                });
            setActive(false);
            axios.post(LinkToBitrix(), {
                fields:
                    {
                        "TITLE": "Квиз",
                        "PHONE": [{"VALUE": data["Номер телефона"], "VALUE_TYPE": "WORK"}],
                        "NAME": data["Имя"],
                        "CASTOM": 'klll',
                        "NUMBER": '0',
                        "COMMENTS": `  Источник: ${LinkOfFrontend()}/${link},
                        Тип мероприятия: ${data["Какой у Вас планируется праздник?"]},
                        Для кого: ${data["Для кого устраиваем праздник?"]},
                        Количество гостей: ${data["Сколько планируется человек?"]},
                        Дополнения: ${data["Чем хотите дополнить квест-шоу?"].toString()},
                        Подарок: ${data["Какой подарок добавить к Вашему празднику?"]},
                        Дата: ${data["В какой день устраивается праздник?"]}`,
                        'UTM_CAMPAIGN': `${searchParams.get("utm_campaign")}`,
                        'UTM_SOURCE': `${searchParams.get("utm_source")}`,
                        'UTM_CONTENT': `${searchParams.get("utm_content")}`,
                        'UTM_MEDIUM': `${searchParams.get("utm_medium")}`,
                        'UTM_TERM': `${searchParams.get("utm_term")}`,
                    },

                params: { "REGISTER_SONET_EVENT": "Y" }
            })
                .catch(function (error) {
                    console.log(error);
                })
    }

    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div
                    className={active ? "modal__content active" : "modal__content"} onClick={
                    e => e.stopPropagation()
                }
                >

                    <div>
                        {persantage !== 100 ? <Game
                                question={question}
                                questionIndexNumber={questionIndexNumber}
                                persentage={persantage}
                                forward={forward}
                                back={back}
                                rangeSliderHandler={rangeSliderHandler}
                                calendarHandler={calendarHandler}
                                cardGrHandler={cardGrHandler}
                                data={data}
                                date={date}
                                setActive={setActive}
                            /> :
                            <Result setActive={setActive} formHandler={formHandler} submitHandler={submitHandler} link={link}/>}
                    </div>
                </div>
            </div>
        </>
    )
}


export default QuizModal