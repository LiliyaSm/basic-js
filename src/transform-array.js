const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArray = [...arr];

    newArray.forEach((v, i) => {
        switch (v) {
            case "--discard-next":
                //make sure the end isn't reached
                if (i !== newArray.length - 1) {
                    delete newArray[i];
                    delete newArray[i + 1];
                } else {
                    delete newArray[i];
                }
                break;

            case "--discard-prev":
                if (i > 1) {
                    delete newArray[i];
                    delete newArray[i - 1];
                } else {
                    delete newArray[i];
                }
                break;

            case "--double-next":
                //make sure the end isn't reached
                i !== newArray.length - 1
                    ? newArray.splice(i, 1, newArray[i + 1])
                    : delete newArray[i];
                break;
            case "--double-prev":
                if (i > 1) {
                    newArray.splice(i, 1, newArray[i - 1]);
                } else {
                    delete newArray[i];
                }
                break;
        }
    });

    return newArray.filter((v) => v !== undefined);
};
