import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function PresentChoice({question, questionIndexNumber, data}) {
    const [state0, setState0] = useState(data[question.title] === question.variants[0] ? true : false);
    const [state1, setState1] = useState(data[question.title] === question.variants[1] ? true : false);
    const [state2, setState2] = useState(data[question.title] === question.variants[2] ? true : false);
    const [state3, setState3] = useState(data[question.title] === question.variants[3] ? true : false);
    const [state4, setState4] = useState(data[question.title] === question.variants[4] ? true : false);
    const [state5, setState5] = useState(data[question.title] === question.variants[5] ? true : false);

    return (
        <Container className="question_container_cards">
           <Row xxl={1} xl = {1} lg = {1} md={1} sm={1} >
                {question.variants[0] &&
                    <Col className="cards_container">
                        <Card
                            className={state0 && "true"}
                            onClick={() => {
                                questionIndexNumber(0);
                                setState0(!state0)
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
                    </Col>}
                {question.variants[1] &&
                    <Col className="cards_container">
                        <Card
                            className={state1 && "true"}
                            onClick={() => {
                                questionIndexNumber(1);
                                setState1(!state1)
                            }}
                        >
                            <Card.Img variant="top" src={question.img[1]}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {question.variants[1]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>}
                                {question.variants[2] &&
                    <Col className="cards_container">
                        <Card
                            className={state2 && "true"}
                            onClick={() => {
                                questionIndexNumber(2);
                                setState2(!state2)
                            }}
                        >
                            <Card.Img variant="top" src={question.img[2]}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {question.variants[2]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>}
                                {question.variants[3] &&
                    <Col className="cards_container">
                        <Card
                            className={state3 && "true"}
                            onClick={() => {
                                questionIndexNumber(3);
                                setState3(!state3)
                            }}
                        >
                            <Card.Img variant="top" src={question.img[3]}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {question.variants[3]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>}
                                {question.variants[4] &&
                    <Col className="cards_container">
                        <Card
                            className={state4 && "true"}
                            onClick={() => {
                                questionIndexNumber(4);
                                setState4(!state4)
                            }}
                        >
                            <Card.Img variant="top" src={question.img[4]}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {question.variants[4]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>}
                                {question.variants[5] &&
                    <Col className="cards_container">
                        <Card
                            className={state5 && "true"}
                            onClick={() => {
                                questionIndexNumber(5);
                                setState5(!state5)
                            }}
                        >
                            <Card.Img variant="top" src={question.img[5]}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {question.variants[5]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>}
            </Row>
        </Container>
    )
}

export default PresentChoice