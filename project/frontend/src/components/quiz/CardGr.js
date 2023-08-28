import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";

function CardGr({question, data, cardGrHandler}) {
    const [answer, setAnswer] = useState(
        data[question.title] ? data[question.title] : []
    );
    const [state0, setState0] = useState(answer.includes(question.variants[0]) ? true : false);
    const [state1, setState1] = useState(answer.includes(question.variants[1]) ? true : false);
    const [state2, setState2] = useState(answer.includes(question.variants[2]) ? true : false);
    const [state3, setState3] = useState(answer.includes(question.variants[3]) ? true : false);
    const [state4, setState4] = useState(answer.includes(question.variants[4]) ? true : false);
    useEffect(() => {
        cardGrHandler(answer)
    }, [answer])
    return (
        <Container className="question_container_cards">
            <Row xxl={5} xl={4} lg={3} md={3} sm={2} xs={1}>
                <Col className="cards_container">
                    <Card
                        className={state0 && "true"}
                        onClick={() => {
                            setState0(!state0)
                            let copy = Object.assign([], answer);
                            state0 === false &&
                            copy.push(question.variants[0])
                            setAnswer(copy)
                            state0 &&
                            setAnswer(answer.filter((e) => e !== question.variants[0]))
                        }}
                    >
                        <Card.Img variant="top" src={question.img[0]}>
                        </Card.Img>
                        <Card.Body>
                            <Card.Text>
                                {question.variants[0]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cards_container">
                    <Card
                        className={state1 && "true"}
                        onClick={() => {
                            setState1(!state1)
                            let copy = Object.assign([], answer);
                            state1 === false &&
                            copy.push(question.variants[1])
                            setAnswer(copy)
                            state1 &&
                            setAnswer(answer.filter((e) => e !== question.variants[1]))
                        }}
                    >
                        <Card.Img variant="top" src={question.img[1]}/>
                        <Card.Body>
                            <Card.Text>
                                {question.variants[1]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cards_container">
                    <Card
                        className={state2 && "true"}
                        onClick={() => {
                            setState2(!state2)
                            let copy = Object.assign([], answer);
                            state2 === false &&
                            copy.push(question.variants[2])
                            setAnswer(copy)
                            state2 &&
                            setAnswer(answer.filter((e) => e !== question.variants[2]))
                        }}
                    >
                        <Card.Img variant="top" src={question.img[2]}/>
                        <Card.Body>
                            <Card.Text>
                                {question.variants[2]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cards_container">
                    <Card
                        className={state3 && "true"}
                        onClick={() => {
                            setState3(!state3)
                            let copy = Object.assign([], answer);
                            state3 === false &&
                            copy.push(question.variants[3])
                            setAnswer(copy)
                            state3 &&
                            setAnswer(answer.filter((e) => e !== question.variants[3]))
                        }}
                    >
                        <Card.Img variant="top" src={question.img[3]}/>
                        <Card.Body>
                            <Card.Text>
                                {question.variants[3]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cards_container">
                    <Card
                        className={state4 && "true"}
                              onClick={() => {
                            setState4(!state4)
                            let copy = Object.assign([], answer);
                            state4 === false &&
                            copy.push(question.variants[4])
                            setAnswer(copy)
                            state4 &&
                            setAnswer(answer.filter((e) => e !== question.variants[4]))
                        }}
                    >
                        <Card.Img variant="top" src={question.img[4]}/>
                        <Card.Body>
                            <Card.Text>
                                {question.variants[4]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default CardGr