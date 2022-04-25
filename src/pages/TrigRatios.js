import { Col, Row, Container, Stack } from "react-bootstrap";
import { React } from "react";
import Triangle from "../components/Triangle.PNG";
import SCTFormulas from "../components/SCTFormulas.js";
import TriangleDimensions from "../components/TriangleDimensions";
import AnswerBox from "../components/AnswerBox";
import Hints from "../components/Hints";

function TrigRatios( ) {

    return (
        <Container fluid>
            <h1>Trigonometric Ratios Practice</h1>
            <Row>
                <Col sm={8}><img src={Triangle} /></Col>
                <Col sm={4}>
                    <Stack gap={4}>
                        <SCTFormulas></SCTFormulas>
                        <br></br>
                        <TriangleDimensions></TriangleDimensions>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 6, offset: 1 }}>
                    <AnswerBox></AnswerBox>
                </Col>
                <Col sm={{ span: 3, offset: 1 }}>
                    <Hints></Hints>
                </Col>
            </Row>
        </Container>
    )
};

export default TrigRatios;