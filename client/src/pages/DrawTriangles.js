import { Col, Row, Container, Stack, Tooltip, Button, OverlayTrigger, Table, Form } from "react-bootstrap";
import { React } from "react";
import Triangle from "../components/Triangle.PNG";

function DrawTriangles( ) {

    const tooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Use the measurements I entered above to create a custom triangle.
        </Tooltip>
    )

    const tooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Generate a triangle of any size or shape.
        </Tooltip>
    )

    const helpTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            A triangle can be created by filling in any 3 measurements in the table below.
            The tool will fill in the remaining 3 measurements to complete your triangle.
            Remember that all angles of a triangle must add to 180 degrees!
            If you would like, you can skip this step and create a random triangle with the 
            "Show me a random triangle" button below.
        </Tooltip>
    )

    return (
        <Container fluid>
            <h1>Triangle Drawing Tool</h1>
            <Row>
                <Col sm={8}><img src={Triangle} /></Col>
                <Col sm={4}>
                    <Stack gap={4}>
                        <br></br>
                        <OverlayTrigger   
                            placement="left"
                            overlay={helpTooltip}
                        >
                            <Button variant="info">How do I create a triangle?</Button>
                        </OverlayTrigger>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th colSpan="2">
                                        Triangle Dimensions
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Side/Angle
                                    </th>
                                    <th>
                                        Measurement
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>side A</td>
                                    <td><Form.Control placeholder="enter a side length"></Form.Control></td>
                                </tr>
                                <tr>
                                    <td>side B</td>
                                    <td><Form.Control placeholder="enter a side length"></Form.Control></td>
                                </tr>
                                <tr>
                                    <td>side C</td>
                                    <td><Form.Control placeholder="enter a side length"></Form.Control></td>
                                </tr>
                                <tr>
                                    <td>angle a</td>
                                    <td><Form.Control placeholder="enter an angle size"></Form.Control></td>
                                </tr>
                                <tr>
                                    <td>angle b</td>
                                    <td><Form.Control placeholder="enter an angle size"></Form.Control></td>
                                </tr>
                                <tr>
                                    <td>angle c</td>
                                    <td><Form.Control placeholder="enter an angle size"></Form.Control></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 6, offset: 1 }}>

                </Col>
                <Col sm={{ span: 3, offset: 1 }}>
                    <Stack gap={5}>
                    <OverlayTrigger   
                            placement="left"
                            overlay={tooltip1}
                        >
                            <Button variant="warning">Build my triangle</Button>
                        </OverlayTrigger>
                        <OverlayTrigger   
                            placement="left"
                            overlay={tooltip2}
                        >
                            <Button variant="warning">Show me a random triangle</Button>
                        </OverlayTrigger>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
};

export default DrawTriangles;