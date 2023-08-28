import React from "react";
import "../css/header.scss"

function Button(props) {
    return (
        <div className="button">
            <button onClick={() => {
                props.setModalActive(true);
                props.carouselActive && props.setCarouselActive(false)
            }}>
                Расчитать стоимость квеста
            </button>
        </div>
    )
}

export default Button