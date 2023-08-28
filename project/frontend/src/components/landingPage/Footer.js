import "../../css/footer.scss"
import hands from "../../media/landing/hands.png"
import line from "../../media/landing/line_bottom_yellow.png"
import React from "react";

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className="dividing-line">
                <img src={line} alt="line"/>
            </div>
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-title">
                        <h2>Позвоните нам прямо сейчас и забронируйте лучшую дату. Подарите себе праздник,
                            о котором мечтали!
                        </h2>
                    </div>
                    <div className="footer-subtitle">
                        <p>Очередь из желающих растет с каждым днем, потому что мы одни в вашем городе проводим такие
                            праздники.</p>
                    </div>
                    <div className="footer-phone">
                        <a href={props.contacts[0]['phone_clickable']}>{props.contacts[0]['phone']}</a>
                    </div>
                    <div className="footer-address">
                        {props.contacts[0]['address']}
                    </div>
                    <div className="footer-button">
                        <a href={props.contacts[0]['how_get']} target="_blank" rel="noopener noreferrer">
                            <button>Как проехать</button>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <img src={hands} alt={hands}/>
                </div>
            </div>
        </div>

    )
}

export default Footer