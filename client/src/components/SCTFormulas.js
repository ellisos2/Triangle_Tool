import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Formulas from "./Formulas.PNG";
import FormulasBlank from "./FormulasBlank.PNG";

function SCTFormulas() {
    const images = {Formulas, FormulasBlank};
    const [formulaToggle, setFormulaToggle] = useState(images.Formulas);

    const toggleFormulas = () => {
        if (formulaToggle === Formulas) {
            setFormulaToggle(FormulasBlank)
        } else {
            setFormulaToggle(Formulas)
        }
    };

    return (
        <Form>
            <img src={formulaToggle} />
            <Form.Check
                type="switch"
                label="toggle formulas"
                onClick={toggleFormulas}
            />

        </Form>
    )
};

export default SCTFormulas;