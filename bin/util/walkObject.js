"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var walkObject = function (cb, base, returnPrimitives) {
    if (returnPrimitives === void 0) { returnPrimitives = false; }
    for (var _i = 0, _a = Object.entries(base); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === "object" && returnPrimitives) {
            walkObject(cb, value);
        }
        else if (typeof value === "object" && !returnPrimitives) {
            if (Array.isArray(value)) {
                base[key] = cb(value);
            }
            else {
                walkObject(cb, value);
            }
        }
        else {
            // if primitive (string or number) has been reached, call cb on value and return
            base[key] = cb(value);
        }
    }
    return base;
};
exports.default = walkObject;
//# sourceMappingURL=walkObject.js.map