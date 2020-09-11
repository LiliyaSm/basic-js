const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // The minimal number of moves required to solve a Tower of Hanoi puzzle is 2^n − 1, where n is the number of disks.
    let turns = 2 ** disksNumber - 1;
    let hours = turns / turnsSpeed;
    let seconds = Math.floor(hours * 60 * 60);
    return { turns, seconds };
};
