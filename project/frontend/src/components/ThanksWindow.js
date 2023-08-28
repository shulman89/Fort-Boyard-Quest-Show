import pictLabel from "../media/landing/fb.png";
import pict from "../media/landing/Thanks_background1.png";
import React from "react";
import {Link, useLocation} from "react-router-dom";

function ThanksWindow() {
    const location = useLocation()
    const {from} = location.state
    console.log(from)
    return (
        <div className="thanks">
            <div className="thanks__left">
                <img src={pictLabel} alt='pictLabel'/>
                <div className="thanks__title">Мы приняли вашу заявку!</div>
                <div
                    className="thanks__subtitle">Ожидайте, менеджер свяжется с Вами в ближайшее время.
                </div>
                <Link to={`/${from['link']}`}>
                    <button> Вернуться на сайт</button>
                </Link>
            </div>
            <div className="thanks__right">
                <img src={pict} alt='pict'/>
            </div>
        </div>
    )
}

export default ThanksWindow