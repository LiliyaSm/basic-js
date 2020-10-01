const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    //     `options` is an `object` of options, that contains properties:
    //   * `repeatTimes` sets the `number` of repetitions of the `str`;
    //   * `separator` is a `string` separating repetitions of the `str`;
    //   * `addition` is an additional `string` that will be added to each repetition of the `str`;
    //   * `additionRepeatTimes` sets the `number` of repetitions of the `addition`;
    //   * `additionSeparator` is a `string` separating repetitions of the `addition`

    let addition = "";
    //null also should be convert in string
    if (options.addition !== undefined) {
        addition = String(options.addition);
    }

    let addResult = addition;

    str = String(str);

    let sep = options.separator ? options.separator : "+";
    let addSep = options.additionSeparator ? options.additionSeparator : "|";

    if (addition) {
        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
            addResult += addSep + addition;
        }
    }

    let result = str + addResult;
    for (let i = 0; i < options.repeatTimes - 1; i++) {
        if (addition) {
            result += sep + str + addResult;
        } else {
            result += sep + str;
        }
    }
    return result;
};
