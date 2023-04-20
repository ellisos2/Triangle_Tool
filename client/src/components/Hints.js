import { React, useState, useEffect } from "react";
import { Popover, Form, Button, Toast, Row, Col, OverlayTrigger } from "react-bootstrap";

function Hints ({ triangle }) {
    
    const hint1 = (
            <Popover>
                <Popover.Body>
                    {triangle.problemHint}
                </Popover.Body>
            </Popover>
    )
    
    return (
        <OverlayTrigger 
            trigger="click"
            placement="right"
            overlay={hint1}
        >
            <Button variant="info">Click here for a hint on this problem!</Button>
        </OverlayTrigger>
    )
};

export default Hints;