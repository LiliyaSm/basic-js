const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {

    let activity = parseFloat(sampleActivity);
    if (
        typeof sampleActivity !== "string" ||
        activity > 15 ||
        activity < 1 ||
        isNaN(activity)
    ) {
        return false;
    };

    let k = 0.693 / HALF_LIFE_PERIOD;
    let res = Math.log(MODERN_ACTIVITY / activity) / k;
    return Math.ceil(res);

};
