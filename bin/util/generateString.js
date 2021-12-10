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
    var generatedString = null;
    console.log(size);
    if (typeof size === 'number') {
        generatedString = lorem.generateWords(size);
    }
    else {
        var category = size.slice(0, 1);
        var quantity = Number(size.slice(1));
        switch (category) {
            case "w":
                generatedString = lorem.generateWords(quantity);
                break;
            case "s":
                generatedString = lorem.generateSentences(quantity);
                break;
            case "p":
                generatedString = lorem.generateParagraphs(quantity);
                break;
            default:
                generatedString = lorem.generateWords(Number(size));
                break;
        }
    }
    return generatedString;
};
exports.default = generateString;
//# sourceMappingURL=generateString.js.map