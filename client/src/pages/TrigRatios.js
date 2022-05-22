import { Col, Row, Container, Stack, Tooltip, Button, OverlayTrigger } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import Triangle from "../components/Triangle.PNG";
import SCTFormulas from "../components/SCTFormulas.js";
import TriangleDimensions from "../components/TriangleDimensions";
import AnswerBox from "../components/AnswerBox";
import Hints from "../components/Hints";

function TrigRatios( ) {

    const[triangle, setTriangle] = useState({});

    const tooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Be careful - you will not be able to return to this exact problem.
        </Tooltip>
    );

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
            <h1>Trigonometric Ratios Practice</h1>
            <Row>
                <Col sm={8}><img src={Triangle} /></Col>
                <Col sm={4}>
                    <Stack gap={4}>
                        <SCTFormulas></SCTFormulas>
                        <br></br>
                        <TriangleDimensions triangle={triangle}></TriangleDimensions>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 6, offset: 1 }}>
                    <AnswerBox triangle={triangle}></AnswerBox>
                </Col>
                <Col sm={{ span: 3, offset: 1 }}>
                    <Stack gap={5}>
                        <Hints></Hints>
                        <OverlayTrigger   
                            placement="left"
                            overlay={tooltip}
                        >
                            <Button 
                                type="submit"
                                onClick={generateProblem}
                                variant="warning"
                            >Give me a new problem</Button>
                        </OverlayTrigger>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
};

export default TrigRatios;