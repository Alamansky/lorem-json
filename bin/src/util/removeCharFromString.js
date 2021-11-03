"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeCharFromString = function (input, characters) {
    return characters.map(function (char) {
        return input
            .split("")
            .filter(function (c) { return c != char; })
            .join("");
    })[-1];
    /* 	input
        .split("")
        .filter((char) => char != character)
        .join(""); */
};
exports.default = removeCharFromString;
//# sourceMappingURL=removeCharFromString.js.map