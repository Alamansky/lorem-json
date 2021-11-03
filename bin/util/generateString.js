"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lorem_ipsum_1 = require("lorem-ipsum");
var lorem = new lorem_ipsum_1.LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});
var generateString = function (size) {
    if (size === void 0) { size = 1; }
    var sizePresets = {
        xs: 3,
        sm: 5,
        md: 8,
        lg: 15,
        xlg: 20,
    };
    return typeof size === "number"
        ? lorem.generateSentences(size)
        : lorem.generateSentences(sizePresets[size]);
};
exports.default = generateString;
//# sourceMappingURL=generateString.js.map