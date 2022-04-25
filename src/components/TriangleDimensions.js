import React from 'react';
import { Table } from "react-bootstrap";

function TriangleDimensions () {
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
                    <td>3</td>
                </tr>
                <tr>
                    <td>side B</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>side C</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>angle a</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>angle b</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>angle c</td>
                    <td>90<span>&#176;</span></td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TriangleDimensions;