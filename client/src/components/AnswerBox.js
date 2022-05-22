import { React, useState } from "react";
import { Form, Button, Toast, Row, Col } from "react-bootstrap";

function AnswerBox ({ triangle }) {
    const [answerMessage, setAnswerMessage] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    //let triangleData = JSON.parse(triangle);

    const checkAnswer = (event) => {
        event.preventDefault();

        let correctAnswer = triangle.answer;

        if (userAnswer <= correctAnswer + 0.1 && userAnswer >= correctAnswer - 0.1) {
            setAnswerMessage("Correct! Try another problem!")
        } else if (userAnswer === "") {
            setAnswerMessage("Please enter an answer.")
        } else {
            setAnswerMessage("Incorrect. Please try again!")
        };
    };

    return (
        <Form onSubmit={checkAnswer}>
            <br></br>
            <Row className="align-items-center">
                <Col>
                    <h3><strong>Solve for: </strong>{triangle.solveFor}</h3>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={2}>
                    Answer
                </Col>
                <Col md={2}>
                    <Form.Text className="text-muted">
                        in degrees
                    </Form.Text></Col>
                <Col md={7}>
                    <Form.Control
                        required
                        placeholder="Round to 1 decimal. (e.g. 10.3)"
                        type="number"
                        step="0.1"
                        min="0"
                        max="1000"
                        value={userAnswer}
                        onChange={e => setUserAnswer(e.target.value)}
                        >
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please enter a numeric value with up to 1 decimal.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size="lg">
                    <Button 
                        type="submit"
                        onClick={toggleShowToast}
                        >
                        Check your Answer
                    </Button>
                    <Toast 
                        show={showToast}
                        onClose={toggleShowToast}
                        >
                        <Toast.Body>{answerMessage}</Toast.Body>
                    </Toast>
                </Col>
            </Row> 
        </Form>
    );
};

export default AnswerBox;