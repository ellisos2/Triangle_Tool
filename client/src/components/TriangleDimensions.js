import React from 'react';
import { Table } from "react-bootstrap";

function TriangleDimensions ( {triangle} ) {
    
    return (
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
                    <td>{triangle.problemSideA}</td>
                </tr>
                <tr>
                    <td>side B</td>
                    <td>{triangle.problemSideB}</td>
                </tr>
                <tr>
                    <td>side C</td>
                    <td>{triangle.problemSideC}</td>
                </tr>
                <tr>
                    <td>angle a</td>
                    <td>{triangle.problemAngleA}</td>
                </tr>
                <tr>
                    <td>angle b</td>
                    <td>{triangle.problemAngleB}</td>
                </tr>
                <tr>
                    <td>angle c</td>
                    <td>{triangle.problemAngleC}<span>&#176;</span></td>
                </tr>
            </tbody>
        </Table>
    )
};

export default TriangleDimensions;