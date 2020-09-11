const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    }
    try {
        date.getTime();
    } catch (error) {
        throw "Error";
    }

    let month = date.getMonth() + 1;

    if (month < 3 || month == 12) {
        return "winter";
    } else if (month > 2 && month < 6) {
        return "spring";
    } else if (month > 5 && month < 9) {
        return "summer";
    } else {
        return "autumn";
    }
};
