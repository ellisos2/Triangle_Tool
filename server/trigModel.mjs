import express from 'express';
import Triangle from './solveTriangle.js';

const PORT = 3000;
const app = express();

app.use(express.json())
   .use(express.urlencoded({ extended: true }));

/* Create a random triangle using the triangle class.
    Uses the triangle class and methods contained in solveTriangle.py.

    randomization adapted from:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/ */
async function newTriangle(res, data, complete) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const chooseSide = Math.floor(Math.random() * 3); // choose side to randomize
    const chooseAngle = Math.floor(Math.random() * 2); // choose angle to randomize
    const randSide = Math.floor(Math.random() * 50 + 1);  // random side measurement
    const randAngle = Math.floor(Math.random() * 70 + 10);  // random angle measurement

    let triangle = [null, null, 90, null, null, null];
    triangle[chooseAngle] = randAngle;
    triangle[chooseSide + 3] = randSide;

    // create a new triangle class object using the random values
    let randTriangle = new Triangle(
        triangle[0], triangle[1], triangle[2],
        triangle[3], triangle[4], triangle[5]
    );

    let triangleParts = [
        "angle a", "angle b", "angle c",
        "side A", "side B", "side C"];

    // solve for the missing angles and sides on the random triangle
    randTriangle.solveAngles();
    randTriangle.solveSide();
    await sleep(1500);  // ensure ample read/write time
    randTriangle.solveSide();
    await sleep(1500);

    // fill the triangle array with solved values
    triangle[0] = randTriangle.angleAMeasure.toFixed(2);
    triangle[1] = randTriangle.angleBMeasure.toFixed(2);
    triangle[3] = randTriangle.sideAMeasure.toFixed(2);
    triangle[4] = randTriangle.sideBMeasure.toFixed(2);
    triangle[5] = randTriangle.sideCMeasure.toFixed(2);

    /* logic to remove shown triangles sides to determine 
        the information shown to the user */
    let current = 2;
    let removed = 0;
    let sidesRemoved = 0;
    while (removed < 3) {
        current = Math.floor(Math.random() * 6);

        if ((triangle[current] !== null) && (current !== 2)) {
            // do not remove all 3 triangle sides
            if (3 <= current && current <= 5) {
                if (sidesRemoved < 2) {
                    sidesRemoved++;
                } else {
                    continue;
                }     
            }
            triangle[current] = null;
            removed++;       
        }
        else {
            continue;
        }
    };

    // choose a random part for the user to solve for
    let solveIndex = 2;  // this position is always filled at start 
    while (triangle[solveIndex] !== null){
        // only choose an angle problem if both angles are unknown
        if (triangle[0] === null && triangle[1] === null) {
            solveIndex = Math.floor(Math.random() * 2);
        }
        else {
            solveIndex = Math.floor(Math.random() * 3 + 3);
        }
    };

    /* Logic to determine the appropriate hint message*/
    let hint = "";
    if (triangleParts[solveIndex] === "angle a") {
        /* CAH => have A and H, solve for angle */
        if (triangle[5] !== null && triangle[4] !== null) {
            hint = "We are given the length of the Hypotenuse and the side Adjacent to the angle we are trying to solve for (CAH). Use the inverse Cosine formula to find the measurement of the angle.";
        /* SOH => have O and H, solve for angle */
        } else if (triangle[5] !== null && triangle[3] !== null) {
            hint = "We are given the length of the Hypotenuse and the side Opposite to the angle we are trying to solve for (SOH). Use the inverse Sine formula to find the measurement of the angle.";
        /* TOA => have O and A, solve for angle */
        } else {
            hint = "We are given the length of the sides Opposite and Adjacent to the angle we are trying to solve for (TOA). Use the inverse Tangent formula to find the measurement of the angle.";
        }
    } else if (triangleParts[solveIndex] === "angle b") {
        /* CAH => have A and H, solve for angle */
        if (triangle[5] !== null && triangle[3] !== null) {
            hint = "We are given the length of the Hypotenuse and the side Adjacent to the angle we are trying to solve for (CAH). Use the inverse Cosine formula to find the measurement of the angle.";
        /* SOH => have O and H, solve for angle */
        } else if (triangle[5] !== null && triangle[4] !== null) {
            hint = "We are given the length of the Hypotenuse and the side Opposite to the angle we are trying to solve for (SOH). Use the inverse Sine formula to find the measurement of the angle.";
        /* TOA => have O and A, solve for angle */
        } else {
            hint = "We are given the length of the sides Opposite and Adjacent to the angle we are trying to solve for (TOA). Use the inverse Tangent formula to find the measurement of the angle.";
        }
    } else if (triangleParts[solveIndex] === "side A") {
        /* CAH => have H and adj angle, solve for A */
        if (triangle[1] !== null && triangle[5] !== null) {
            hint = "We are given the length of the Hypotenuse and the measure of the angle Adjacent to the side we are trying to solve for (CAH). Use the Cosine formula to find the measurement of the side.";
        /* SOH => have H and opp angle, solve for A */
        } else if (triangle[0] !== null && triangle[5] !== null) {
            hint = "We are given the length of the Hypotenuse and the measure of the angle Opposite to the side we are trying to solve for (SOH). Use the Sine formula to find the measurement of the side.";
        /* TOA => have adj angle and side opp, solve for A */
        } else if (triangle[1] !== null && triangle[4] !== null) {
            hint = "We are given the length of a side and its Opposite angle and are asked to solve for the Adjacent side (TOA). Use the Tangent formula to find the measurement of the Adjacent side.";
        /* TOA => have adj angle and side opp, solve for A */
        } else {
            hint = "We are given the length of a side and its Adjacent angle and are asked to solve for the Opposite side (TOA). Use the Tangent formula to find the measurement of the Opposite side.";
        }
    } else if (triangleParts[solveIndex] === "side B") {
        /* CAH => have H and adj angle, solve for B */
        if (triangle[0] !== null && triangle[5] !== null) {
            hint = "We are given the length of the Hypotenuse and the measure of the angle Adjacent to the side we are trying to solve for (CAH). Use the Cosine formula to find the measurement of the side.";
        /* SOH => have H and opp angle, solve for B */
        } else if (triangle[1] !== null && triangle[5] !== null) {
            hint = "We are given the length of the Hypotenuse and the measure of the angle Opposite to the side we are trying to solve for (SOH). Use the Sine formula to find the measurement of the side.";
        /* TOA => have adj angle and side opp, solve for B */
        } else if (triangle[0] !== null && triangle[3] !== null) {
            hint = "We are given the length of a side and its Opposite angle and are asked to solve for the Adjacent side (TOA). Use the Tangent formula to find the measurement of the Adjacent side.";
        /* TOA => have adj angle and side opp, solve for B */
        } else {
            hint = "We are given the length of a side and its Adjacent angle and are asked to solve for the Opposite side (TOA). Use the Tangent formula to find the measurement of the Opposite side."
        }
    } else if (triangleParts[solveIndex] === "side C") {
        /* CAH => have A and adj angle, solve for C */
        if (triangle[3] !== null && triangle[1] !== null) {
            hint = "We are given the length of a side and its Adjacent angle and are asked to solve for the Hypotenuse (CAH). Use the Cosine formula to find the measurement of the Hypotenuse.";
        /* CAH => have B and adj angle, solve for C */
        } else if (triangle[4] !== null && triangle[0] !== null) {
            hint = "We are given the length of a side and its Adjacent angle and are asked to solve for the Hypotenuse (CAH). Use the Cosine formula to find the measurement of the Hypotenuse.";
        /* SOH => have A and opp angle, solve for C */
        } else if (triangle[3] !== null && triangle[0] !== null) {
            hint = "We are given the length of a side and its Opposite angle and are asked to solve for the Hypotenuse (SOH). Use the Sine formula to find the measurement of the Hypotenuse.";
        /* SOH => have B and opp angle, solve for C */
        } else if (triangle[4] !== null && triangle[1] !== null) {
            hint = "We are given the length of a side and its Opposite angle and are asked to solve for the Hypotenuse (SOH). Use the Sine formula to find the measurement of the Hypotenuse.";
        } 
    };

    // store solved values separately from values to be used
    // for displaying the problem
    let solvedTriangle = [
        randTriangle.angleAMeasure, randTriangle.angleBMeasure,
        randTriangle.angleCMeasure, randTriangle.sideAMeasure,
        randTriangle.sideBMeasure, randTriangle.sideCMeasure];


    // data to be used by the web application
    data.triangle = {
        angleA: randTriangle.angleAMeasure, 
        angleB: randTriangle.angleBMeasure,
        angleC: randTriangle.angleCMeasure,
        sideA: randTriangle.sideAMeasure,
        sideB: randTriangle.sideBMeasure,
        sideC: randTriangle.sideCMeasure,
        problemAngleA: triangle[0], 
        problemAngleB: triangle[1],
        problemAngleC: triangle[2],
        problemSideA: triangle[3],
        problemSideB: triangle[4],
        problemSideC: triangle[5],
        solveFor: triangleParts[solveIndex],
        answer: solvedTriangle[solveIndex],
        problemHint: hint
    };

    complete();
};

/* called when a user requests a new problem or 
    reloads the page */
app.get("/new-problem", (req, res) => {

    var callbackCount = 0;
    let data = {};
    newTriangle(res, data, complete);
    function complete() {
        callbackCount++;
        if (callbackCount >= 1) {
            res.json(data.triangle);
        };
    }
});

app.listen(PORT, () => {
    console.log(`Express started on :${PORT}`);
});