"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeCharsFromString = function (input, characters) {
    var inputCopy = input;
    characters.forEach(function (char) {
        inputCopy = inputCopy
            .split("")
            .filter(function (c) { return c != char; })
            .join("");
    });
    return inputCopy;
};
exports.default = removeCharsFromString;
//# sourceMappingURL=removeCharFromString.js.map