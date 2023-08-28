import React from "react";
import {useState, useEffect} from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import useInput from "../useInput";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import InputMask from "react-input-mask";


function Result({formHandler, submitHandler, setActive, link}) {
    const name = useInput('', {empty: true, minLength: 3})
    const phone = useInput('', {empty: true, minLength: 11, isPhone: true})
    const [checked, setChecked] = useState(true);
    const [show, setShow] = useState(false);


    const handleShow = () => setShow(true);

    useEffect(() => {
        formHandler(name.value, phone.value)
    }, [name.value, phone.value])

    return (
        <>
            <div className="result">
                <div onClick={() => setActive(false)} style={{alignSelf: 'self-end', marginRight: '5px'}}>
                    <FontAwesomeIcon icon={faXmark} className="x-icon"/>
                </div>
                <div className="result__title">
                    Пожалуйста, заполните форму, чтобы узнать стоимость
                </div>

                <div className="result__form_container">
                    <div className="form">
                        {(name.dirty && name.empty) &&
                            <div style={{color: "red", fontWeight: '100', fontSize: '14px'}}>Это поле не может быть
                                пустым</div>}
                        <input
                            name="name"
                            className={'form__field'}
                            placeholder="Введите имя"
                            type="text"
                            value={name.value}
                            onChange={e => name.onChange(e)}
                            onBlur={e => name.onBlur(e)}
                        />
                        {(phone.dirty && phone.empty) &&
                            <div style={{color: "red", fontWeight: '100', fontSize: '14px'}}>Это поле не может быть
                                пустым</div>}
                        {(!phone.empty && phone.phoneError) &&
                            <div style={{color: "red", fontWeight: '100', fontSize: '14px'}}>Некорректный номер
                                телефона</div>}
                        <InputMask
                            mask="+7 (999) 999-99-99"
                            name="phone"
                            className='form__field'
                            placeholder="+ 7  _ _ _  -  _ _ _  -  _ _  -  _ _"
                            type="text"
                            value={phone.value}
                            onChange={e => phone.onChange(e)}
                            onBlur={e => phone.onBlur(e)}

                        />

                        <div
                            className={(!checked || !name.inputValid || !phone.inputValid) ? "form__submit__fail" : "form__submit"}>
                            <Link style={{color: 'black'}} to="/thanks" state={{from: {link}}}>
                                <div onClick={submitHandler}>
                                    Получить результаты
                                </div>
                            </Link>
                        </div>

                        {!checked &&
                            <div className="alert">Необходимо принять условия обработки персональных данных</div>}
                        <div className="form__checkbox">
                            <input
                                style={{marginRight: "10px"}}
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <div>
                                Принимаю <span/>
                                <button className="personal-data" onClick={handleShow}>
                                    условия обработки персональных данных
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PrivacyPolicy show={show} setShow={setShow}/>
        </>
    );
}

export default Result;