#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var removeCharFromString_1 = __importDefault(require("../util/removeCharFromString"));
var kvPairs = removeCharFromString_1.default(process.argv[2], ["{", "}"]).split(",");
console.log(kvPairs);
//# sourceMappingURL=lorem-json.js.map