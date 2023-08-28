import '../../css/bodyThird.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yellow1 from "../../media/landing/yellow1.png"
import yellow2 from "../../media/landing/yellow2.png"
import yellow3 from "../../media/landing/yellow3.png"
import yellow4 from "../../media/landing/yellow4.png"
import yellow5 from "../../media/landing/yellow5.png"
import yellow6 from "../../media/landing/yellow6.png"
import yellow7 from "../../media/landing/yellow7.png"
import yellow8 from "../../media/landing/yellow8.png"
import {Carousel} from "react-bootstrap";
import React from "react";


function BodyThird() {
    return (<>
            <div className="slider-yellow-cards-container">
                <div className="slogan_optimistic1">
                    <div>Здесь проходят <span className="yellow-text">самые крутые праздники!</span></div>
                </div>
                <Carousel
                    className="slider-yellow-cards"
                    touch={true}
                    indicators={false}
                >
                    <Carousel.Item className="yellow-card">
                        <img src={yellow5} alt="yellow5"/>
                    </Carousel.Item>
                    <Carousel.Item className="yellow-card">
                        <img src={yellow6} alt="yellow6"/>
                    </Carousel.Item>
                    <Carousel.Item className="yellow-card">
                        <img src={yellow7} alt="yellow7"/>
                    </Carousel.Item>
                    <Carousel.Item className="yellow-card">
                        <img src={yellow8} alt="yellow8"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="body-third-container">
                <div className="slogan_optimistic">
                    Здесь проходят  <span>самые крутые праздники!</span>
                </div>
                <div className="yellow-cards-container ">
                    <div className="yellow-cards-container-half">
                        <div className="yellow-card-frame">
                            <div className="yellow-card">
                                <div className="yellow-title">
                                    Персональный подход
                                </div>
                                <div className="yellow-text">
                                    Профессиональные ведущие проведут мероприятие по
                                    индивидуальной программе так, чтобы ни один
                                    участник не остался без внимания
                                </div>
                                <div className="yellow-pic">
                                    <img src={yellow1} alt="yellow1"/>
                                </div>
                            </div>
                        </div>
                        <div className="yellow-card-frame">
                            <div className="yellow-card">
                                <div className="yellow-title">
                                    Торжественная атмосфера
                                </div>
                                <div className="yellow-text">
                                    Украсим площадку шариками и ярким авторским реквизитом,
                                    чтобы создать необычайную торжественную атмосферу
                                </div>
                                <div className="yellow-pic">
                                    <img src={yellow2} alt="yellow2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="yellow-cards-container-half">
                        <div className="yellow-card-frame">
                            <div className="yellow-card">
                                <div className="yellow-title">
                                    Устроим пир на весь мир
                                </div>
                                <div className="yellow-text">
                                    Устроим праздничный банкет под ваш любой бюджет на площадке
                                </div>
                                <div className="yellow-pic">
                                    <img src={yellow3} alt="yellow3"/>
                                </div>
                            </div>
                        </div>
                        <div className="yellow-card-frame">
                            <div className="yellow-card">
                                <div className="yellow-title">
                                    Веселые танцы до упаду
                                </div>
                                <div className="yellow-text">
                                    Обеспечим музыкальное сопровождение и проведем веселые дискотеки с диджеем
                                </div>
                                <div className="yellow-pic">
                                    <img src={yellow4} alt="yellow4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyThird