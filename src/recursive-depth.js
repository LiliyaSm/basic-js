const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor() {
        this.depth = 1;
        this.level = 0;
    }

    calculateDepth(array) {
        this.level++;

        for (array.value of array) {
            if (Array.isArray(array.value)) {
                // check if level was visited already
                if (!(this.depth > this.level)) {
                    this.depth++;
                }
                this.calculateDepth(array.value);
            }
        }

        if (this.level === 1) {
            // end recursion and return result
            let result = this.depth;
            this.depth = 1;
            this.level = 0;
            return result;
        }
        this.level -= 1;
    }
};
