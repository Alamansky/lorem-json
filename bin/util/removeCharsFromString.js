"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeCharsFromString = function (input, characters) {
    characters.forEach(function (char) {
        input = input
            .split("")
            .filter(function (c) { return c != char; })
            .join("");
    });
    return input;
};
exports.default = removeCharsFromString;
//# sourceMappingURL=removeCharsFromString.js.map