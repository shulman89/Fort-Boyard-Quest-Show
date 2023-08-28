import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [empty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'empty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isPhone':
                    const re = /^\s?\+?[78]\s?[-\(]?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}\s?$/
                    return re.test(String(value)) ? setPhoneError(false) : setPhoneError(true)
                default:
                    alert('')

            }
        }
    }, [value,validations]);

    useEffect(() => {
        if (empty || phoneError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [empty, phoneError])

    return {
        empty,
        minLengthError,
        phoneError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [dirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        dirty,
        onChange,
        onBlur,
        ...valid,
    }
}

export default useInput