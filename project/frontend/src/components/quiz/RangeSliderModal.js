import {useEffect, useState} from "react";

function RangeSliderModal({rangeSliderHandler, question, data}) {
    const [value, setValue] = useState(
        data[question.title] ? data[question.title] : 8
    );
    useEffect(() => {
        rangeSliderHandler(value)
    }, [value])
    return (
        <div className="question_container">
            <div className="slider_container">
                <div>
                    <input
                        className="slider_value"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        className="range"
                        type="range"
                        min="8" max="50"
                        step="1"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default RangeSliderModal