import { Col, Row, Container, Stack, Button, Modal, Toast } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import Triangle from "../components/Triangle.PNG";
import SCTFormulas from "../components/SCTFormulas.js";
import TriangleDimensions from "../components/TriangleDimensions";
import AnswerBox from "../components/AnswerBox";
import Hints from "../components/Hints";

function TrigRatios( ) {

    const [triangle, setTriangle] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(true);

    const handleCloseModal = () => setShowModal(false);
    const handleNewProblem = () => {
        setShowModal(false);
        generateProblem();
    };
    const handleShowModal = () => setShowModal(true);

    const generateProblem = async () => {
        const response = await fetch("/new-problem", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const triangle = await response.json();
        setTriangle(triangle);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    return (
        <Container fluid>
            <Toast onClose={() => setShowToast(false)} show={showToast} bg="warning">
                <Toast.Header>
                    <strong>Below you'll see a triangle and some dimensions in a table</strong>
                </Toast.Header>
                <Toast.Body variant="warning">
                    Using the measurements given, solve for the missing side or angle using Trigonometric
                    properties, then check your answer. Click on the hints button if you get stuck!
                </Toast.Body>
            </Toast>
            <h1>Trigonometric Ratios Practice</h1>
            <Row>
                <Col sm={8}>
                    <div class="container">
                        <img src={Triangle} />
                        <div class="top">Triangle not drawn to scale</div>
                    </div>
                </Col>
                <Col sm={4}>
                    <Stack gap={4}>
                        <SCTFormulas></SCTFormulas>
                        <br></br>
                        <TriangleDimensions triangle={triangle}></TriangleDimensions>
                    </Stack>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={{ span: 3, offset: 1 }}>
                    <Stack gap={5}>
                        <Hints triangle={triangle}></Hints>
                        <Button 
                            onClick={handleShowModal}
                            variant="danger"
                        >
                            Give me a new problem    
                        </Button>    
                        <Modal
                            show={showModal}
                            size="lg"
                            centered
                        >
                            <Modal.Body>
                                <h3>
                                    Would you like to generate a new problem?
                                </h3>
                                <p>
                                    You will lose the current problem, and will not be able to
                                    return to it.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    type="submit"
                                    variant="success"
                                    onClick={handleCloseModal}
                                >Cancel - Return to problem</Button>
                                <Button 
                                    type="submit"
                                    onClick={handleNewProblem}
                                    variant="danger"
                                >Give me a new problem</Button>
                            </Modal.Footer>
                        </Modal>
                        
                    </Stack>
                </Col>
                <Col sm={{ span: 6, offset: 1 }}>
                    <AnswerBox triangle={triangle}></AnswerBox>
                </Col>
            </Row>
        </Container>
    )
};

export default TrigRatios;