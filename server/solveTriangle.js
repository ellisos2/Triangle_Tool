module.exports = (
    class Triangle {
        constructor(angleA, angleB, angleC, sideA, sideB, sideC)
        {
            this.angleA = angleA;
            this.angleB = angleB;
            this.angleC = angleC;
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
        }

        get angleAMeasure() {
            return this.angleA;
        }

        get angleBMeasure() {
            return this.angleB;
        }

        get angleCMeasure() {
            return this.angleC;
        }

        get sideAMeasure() {
            return this.sideA;
        }

        get sideBMeasure() {
            return this.sideB;
        }

        get sideCMeasure() {
            return this.sideC;
        }

        solveAngles() {
            if (this.angleA === null) {
                this.angleA = 180 - this.angleB - this.angleC;
            } else if (this.angleB === null) {
                this.angleB = 180 - this.angleA - this.angleC;
            } else {
                this.angleC = 180 - this.angleA - this.angleB;
            }
        };

        solveSide() {
            if (this.sideAMeasure !== null && (this.sideBMeasure !== null)) {
                // solve for hypotenuse (C) - only side unsolved
                this.cosineSolve(this.angleBMeasure);
            } else if (this.sideAMeasure !== null && this.sideCMeasure === null) {
                // solve for hypotenuse (C) - only A known
                this.cosineSolve(this.angleBMeasure);
            } else if (this.sideBMeasure !== null && this.sideCMeasure === null) {
                // solve for hypotenuse (C) - only B known
                this.cosineSolve(this.angleAMeasure);
            } else if (this.sideCMeasure !== null && this.sideAMeasure === null) {
                // solve for (A) - C known
                this.cosineSolve(this.angleBMeasure);
            } else if (this.sideCMeasure !== null && this.sideBMeasure === null) {
                // solve for (B) - C known
                this.cosineSolve(this.angleAMeasure);
            }
        };

        async cosineSolve(angle) {
            var fs = require('fs');

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            let hypotenuse = this.sideC;
            let adjacent = 0;
            if (angle === this.angleA) {
                adjacent = this.sideBMeasure;
            } else {
                adjacent = this.sideAMeasure;
            }

            /* Write the calc command to text.txt */
            fs.writeFile('text.txt', `cos, ${angle}`, (err) => {
                if (err) {
                    throw err;
                }
            });

            let ratio = 0;
            await sleep(1000);

            /* Read the result from text.txt and update
               the relevant calculated side values */
            fs.readFile('text.txt', 'ascii', (err, calc) => {
                if (err) {
                    throw err;
                }
                ratio = calc;

                if (hypotenuse === null) {
                    this.sideC = adjacent / ratio;
                } else if (angle === this.angleA) {
                    this.sideB = hypotenuse * ratio;
                } else {
                    this.sideA = hypotenuse * ratio;
                };
            });
        }
    }
);