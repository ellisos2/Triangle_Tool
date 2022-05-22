import express from 'express';
import Triangle from './solveTriangle.js';

const PORT = 3000;
const app = express();

app.use(express.json())
   .use(express.urlencoded({ extended: true }));

/* Create a random triangle using the triangle class.

    randomization adapted from:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/ */
async function newTriangle(res, data, complete) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const chooseSide = Math.floor(Math.random() * 3); // choose side to randomize
    const chooseAngle = Math.floor(Math.random() * 2); // choose angle to randomize
    const randSide = Math.floor(Math.random() * 50 + 1);
    const randAngle = Math.floor(Math.random() * 70 + 10);

    let triangle = [null, null, 90, null, null, null];
    triangle[chooseAngle] = randAngle;
    triangle[chooseSide + 3] = randSide;

    let randTriangle = new Triangle(
        triangle[0], triangle[1], triangle[2],
        triangle[3], triangle[4], triangle[5]
    );

    // choose a random part for the user to solve for
    let solveIndex = 2;  // this position is always filled at start 
    while (triangle[solveIndex] !== null){
        solveIndex = Math.floor(Math.random() * 6);
    }

    let triangleParts = [
                    "angle a", "angle b", "angle c",
                    "side A", "side B", "side C"];
    
    // solve for the missing angles and sides on the random triangle
    randTriangle.solveAngles();
    randTriangle.solveSide();
    await sleep(1500);
    randTriangle.solveSide();
    await sleep(1500);

    let solvedTriangle = [
        randTriangle.angleAMeasure, randTriangle.angleBMeasure,
        randTriangle.angleCMeasure, randTriangle.sideAMeasure,
        randTriangle.sideBMeasure, randTriangle.sideCMeasure];

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
        answer: solvedTriangle[solveIndex]
    };

    complete();
};

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