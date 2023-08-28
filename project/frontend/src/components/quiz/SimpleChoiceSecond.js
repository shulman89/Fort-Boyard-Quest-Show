import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SimpleChoiceSecond({question, questionIndexNumber, data}) {
    const [state0, setState0] = useState(data[question.title] === question.variants[0] ? true : false);
    const [state1, setState1] = useState(data[question.title] === question.variants[1] ? true : false);
    const [state2, setState2] = useState(data[question.title] === question.variants[2] ? true : false);
    const [state3, setState3] = useState(data[question.title] === question.variants[3] ? true : false);
    const [state4, setState4] = useState(data[question.title] === question.variants[4] ? true : false);

    return (
        <Container className="question_container">
            <Row xxl={4} xl={4} lg={4} md={3} sm={2} xs={2} className="justify-content-center">
                <Col
                    className={state0 ? "question_active" : "question"}
                    onClick={() => {
                        questionIndexNumber(0);
                        setState0(!state0)
                    }}
                >
                    👫 {question.variants[0]}
                </Col>
                <Col
                    className={state1 ? "question_active" : "question"}
                    onClick={() => {
                        questionIndexNumber(1);
                        setState1(!state1)
                    }}
                >
                    👱 {question.variants[1]}
                </Col>
                <Col
                    className={state2 ? "question_active" : "question"}
                    onClick={() => {
                        questionIndexNumber(2);
                        setState2(!state2)
                    }}
                >
                    🧒 {question.variants[2]}
                </Col>
                {/*</Row>*/}
                {/*<Row>*/}
                <Col
                    className={state3 ? "question_active" : "question"}
                    onClick={() => {
                        questionIndexNumber(3);
                        setState3(!state3)
                    }}
                >
                    👨 {question.variants[3]}
                </Col>
                <Col
                    className={state4 ? "question_active" : "question"}
                    onClick={() => {
                        questionIndexNumber(4);
                        setState4(!state4)
                    }}
                >
                    👪 {question.variants[4]}
                </Col>
            </Row>
        </Container>
    )
}

export default SimpleChoiceSecond