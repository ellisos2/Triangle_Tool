import React from 'react';
import { Button, Container, Stack, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Home() {
    const tooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Try randomly generated problems using the sin, cos, or tan formulas!
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
            </Stack>
        </Container>
    );
};

export default Home;