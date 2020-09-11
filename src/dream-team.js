const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let arr = members.filter(v => typeof v === "string");
    let result = arr
        .map((member) => member.trim().slice(0, 1).toUpperCase())
        .sort()
        .join("");
    return result;
};
