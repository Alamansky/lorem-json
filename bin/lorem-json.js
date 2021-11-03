#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var removeCharsFromString_1 = __importDefault(require("./util/removeCharsFromString"));
var generateLoremValue_1 = __importDefault(require("./util/generateLoremValue"));
var walkObject_1 = __importDefault(require("./util/walkObject"));
var input = process.argv[2];
var kvArray = removeCharsFromString_1.default(input, ["\u0022", "\u0027"]).split(" ");
var validJsonString = kvArray
    .map(function (x) {
    var value = x.match(/[a-z]|[0-9]|[\/\*]/gi).join("");
    var quotedValue = x.replace(value, "\"" + value + "\"");
    return quotedValue;
})
    .join("");
var parsedJson = JSON.parse(validJsonString);
var expandedJson = walkObject_1.default(function (value) { return generateLoremValue_1.default(value); }, parsedJson);
console.log(JSON.stringify(expandedJson, null, 2));
//# sourceMappingURL=lorem-json.js.map