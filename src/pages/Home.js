import React from 'react';
import { Button, Container, Stack, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Home() {
    const tooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Try randomly generated problems using the sin, cos, or tan formulas!
        </Tooltip>
    )

    const tooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Use the drawing tool to create a triangle of any size or shape!
        </Tooltip>
    )

    const tooltip3 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Try randomly generated problems using the law of sines and law of cosines formulas!
        </Tooltip>
    )

    let navigate = useNavigate();

    const routeTrigRatios = () => {
        let path = "/TrigRatios";
        navigate(path);
    }

    return (
        <Container fluid>
            <h1>Triangle Problems Practice Tool</h1>
            <Stack gap={5} className="col-md-6 mx-auto">
                <OverlayTrigger
                    placement="right"
                    overlay={tooltip1}
                >
                    <Button 
                        variant="outline-dark"
                        onClick={routeTrigRatios}
                    >
                        Practice sin/cos/tan Problems</Button>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="right"
                    overlay={tooltip2}
                >
                    <Button variant="outline-dark">Draw Triangles</Button>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="right"
                    overlay={tooltip3}
                >
                    <Button variant="outline-dark">Practice Law of Sines/Cosines Problems</Button>
                </OverlayTrigger>
            </Stack>
        </Container>
    );
};

export default Home;