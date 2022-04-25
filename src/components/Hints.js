import { React, useState, useEffect } from "react";
import { Popover, Form, Button, Toast, Row, Col, OverlayTrigger } from "react-bootstrap";

function Hints () {
    
    const hint1 = (
            <Popover>
                <Popover.Body>
                    We are given the length of the hypotenuse and the side adjacent to the angle we are trying to solve for.
                    Use the inverse cosine formula to find the measurement of the angle.
                </Popover.Body>
            </Popover>
    )
    
    return (
        <OverlayTrigger 
            trigger="click"
            placement="left"
            overlay={hint1}
        >
            <Button variant="info">Click here for a hint on this problem!</Button>
        </OverlayTrigger>
    )
};

export default Hints;