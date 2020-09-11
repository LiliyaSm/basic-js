const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let result = 0;
    backyard.forEach((value) => {
        value.forEach((i) => {
            if (i === "^^") {
                result++;
            }
        });
    });
    return result;
};
