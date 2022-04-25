import { Col, Row, Container, Stack, Tooltip, Button, OverlayTrigger } from "react-bootstrap";
import { React } from "react";
import Triangle from "../components/Triangle.PNG";
import SCTFormulas from "../components/SCTFormulas.js";
import TriangleDimensions from "../components/TriangleDimensions";
import AnswerBox from "../components/AnswerBox";
import Hints from "../components/Hints";

function TrigRatios( ) {

    const tooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Be careful - you will not be able to return to this exact problem.
        </Tooltip>
    )

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
                    <Stack gap={5}>
                        <Hints></Hints>
                        <OverlayTrigger   
                            placement="left"
                            overlay={tooltip}
                        >
                            <Button variant="warning">Give me a new problem</Button>
                        </OverlayTrigger>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
};

export default TrigRatios;