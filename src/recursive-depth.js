const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor() {
        this.depth = 0;
        // this.flag = 0;
    }

    calculateDepth(array) {
        console.log(array);

        this.depth++;
        let level = this.depth;
        console.log("depth0", this.depth);
        console.log("level", level);

        for (array.value of array) {
            if (Array.isArray(array.value)) {
                console.log(array.value);
                console.log("depth", this.depth);
                // level++;
                // if (level > this.depth) {
                    // this.depth++;
                    this.calculateDepth(array.value);
                // }
                // flag = 1;
            }
        }
        if (level === 1) {
        let result = this.depth;
        this.depth = 0;
        // console.log("result", result)
            return result;
        }
    }
};
