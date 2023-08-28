import RangeSliderModal from "./RangeSliderModal";
import Calendar from "./Calendar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight, faAnglesLeft, faXmark} from "@fortawesome/free-solid-svg-icons"
import CardGr from "./CardGr";
import SimpleChoiceFirst from "./SimpleChoiceFirst";
import SimpleChoiceSecond from "./SimpleChoiceSecond"
import PresentChoice from "./PresentChoice";
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from "react";


function Game({
                  question,
                  questionIndexNumber,
                  persentage,
                  forward,
                  back,
                  rangeSliderHandler,
                  calendarHandler,
                  cardGrHandler,
                  data,
                  date,
                  setActive,
              }) {

    return (
        <div className="quiz_container">
            <div className="quiz_header">
                <div> Пройдите бесплатный опрос и узнайте стоимость проведения именно ВАШЕГО праздника</div>
                <div onClick={() => setActive(false)}>
                    <FontAwesomeIcon icon={faXmark} className="x-icon"/>
                </div>
            </div>
            <div className="quiz_body">
                <div className="quiz_title">
                    {question.title}
                </div>
                <div className="quiz_questions">
                    {question.id === 0 &&
                        <SimpleChoiceFirst data={data} question={question} questionIndexNumber={questionIndexNumber}/>}

                    {question.id === 1 &&
                        <SimpleChoiceSecond data={data} question={question} questionIndexNumber={questionIndexNumber}/>}

                    {question.id === 2 &&
                        <RangeSliderModal data={data} question={question} rangeSliderHandler={rangeSliderHandler}/>}

                    {question.id === 3 &&
                        <CardGr data={data} question={question} cardGrHandler={cardGrHandler}/>}

                    {question.id === 4 &&
                        <div className="calendar">
                            <Calendar date={date} calendarHandler={calendarHandler}/>
                        </div>}

                    {question.id === 5 &&
                        <PresentChoice data={data} question={question} questionIndexNumber={questionIndexNumber}/>}
                </div>
            </div>
            <div className="quiz_footer">
                <div className="persentage">
                    <div className="ready">Готово: <span>{persentage}%</span></div>
                    <div className="progress ">
                        <div className="a"><ProgressBar variant="warning" animated now={persentage}/></div>
                    </div>
                </div>

                <div className="button_block">
                    <div className={persentage > 0 ? "btn-5" : "btn-5 off"} onClick={back}>
                        <div className="button_chevron"><FontAwesomeIcon icon={faAnglesLeft}/></div>
                    </div>
                    <div className="ready_off">Готово: <span>{persentage}%</span></div>
                    <div className={persentage < 100 ? "btn-6" : "btn-6 off"} onClick={forward}>
                        <div className="button_chevron"><FontAwesomeIcon icon={faAnglesRight}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game