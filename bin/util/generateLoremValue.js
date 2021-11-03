"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateString_1 = __importDefault(require("./generateString"));
var generateNumber_1 = __importDefault(require("./generateNumber"));
var getValueOptions = function (value) {
    var _a = value.split("/"), valueType = _a[0], _b = _a[1], valueOptions = _b === void 0 ? "1*1" : _b;
    var _c = valueOptions.split("*"), _d = _c[0], size = _d === void 0 ? 1 : _d, _e = _c[1], quantity = _e === void 0 ? 1 : _e;
    return { valueType: valueType, size: Number(size), quantity: Number(quantity) };
};
var generateLoremValue = function (value) {
    if (Array.isArray(value)) {
        var expandedArray_1 = [];
        value.forEach(function (element) {
            var _a = getValueOptions(element), valueType = _a.valueType, size = _a.size, quantity = _a.quantity;
            var arr = new Array(quantity)
                .fill(0, 0, quantity)
                .map(function (x) {
                return valueType === "string"
                    ? generateString_1.default(size)
                    : generateNumber_1.default(size);
            });
            expandedArray_1.push.apply(expandedArray_1, arr);
        });
        return expandedArray_1;
    }
    else {
        var _a = getValueOptions(value), valueType = _a.valueType, size = _a.size, quantity = _a.quantity;
        return valueType === "string"
            ? generateString_1.default(size)
            : generateNumber_1.default(size);
    }
};
exports.default = generateLoremValue;
//# sourceMappingURL=generateLoremValue.js.map