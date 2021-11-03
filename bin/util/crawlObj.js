"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crawlObj = function (cb, base, returnPrimitives) {
    if (returnPrimitives === void 0) { returnPrimitives = false; }
    for (var _i = 0, _a = Object.entries(base); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === "object") {
            if (returnPrimitives) {
                crawlObj(cb, value);
            }
            else {
                if (Array.isArray(value)) {
                    base[key] = cb(value);
                }
                else {
                    crawlObj(cb, value);
                }
            }
        }
        else {
            base[key] = cb(value);
        }
    }
    return base;
};
exports.default = crawlObj;
/* const crawlObj = (cb: Function, base: any, returnPrimitives = false) => {
    for (const [key, value] of Object.entries(base)) {
        if (typeof value === "object") {
            crawlObj(cb, value);
        } else {
            base[key] = cb(value);
        }
    }
    return base;
};

export default crawlObj;
 */
//# sourceMappingURL=crawlObj.js.map