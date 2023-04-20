import { React, useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap";

export const TriangleDimensions = ({ triangle }) => {

    const [angleA, setAngleA] = useState();
    const [angleB, setAngleB] = useState();
    const [angleC, setAngleC] = useState();
    const [sideA, setSideA] = useState();
    const [sideB, setSideB] = useState();
    const [sideC, setSideC] = useState();

    const showDimensions = () => {
        setAngleA(triangle.problemAngleA);
        setAngleB(triangle.problemAngleB);
        setAngleC(triangle.problemAngleC);
        setSideA(triangle.problemSideA);
        setSideB(triangle.problemSideB);
        setSideC(triangle.problemSideC);
    };

    const showResults = () => {
        setAngleA(triangle.angleA.toFixed(2));
        setAngleB(triangle.angleB.toFixed(2));
        setAngleC(triangle.angleC.toFixed(2));
        setSideA(triangle.sideA.toFixed(2));
        setSideB(triangle.sideB.toFixed(2));
        setSideC(triangle.sideC.toFixed(2));
    };

    useEffect(() => {
        showDimensions()
    }, [triangle]);

    return (
        <div>
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
                        <td>{sideA}</td>
                    </tr>
                    <tr>
                        <td>side B</td>
                        <td>{sideB}</td>
                    </tr>
                    <tr>
                        <td>side C</td>
                        <td>{sideC}</td>
                    </tr>
                    <tr>
                        <td>angle a</td>
                        <td>{angleA}<span>&#176;</span></td>
                    </tr>
                    <tr>
                        <td>angle b</td>
                        <td>{angleB}<span>&#176;</span></td>
                    </tr>
                    <tr>
                        <td>angle c</td>
                        <td>{angleC}<span>&#176;</span></td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>           
            </Table>
            <div className="d-grid">
                <Button
                    type="submit"
                    variant="warning"
                    onClick={showResults}
                >
                    Show all answers
                </Button>
            </div>
        </div>
    )
};

export default TriangleDimensions;