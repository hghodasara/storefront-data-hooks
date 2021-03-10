"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatHeader(prev, val) {
    if (!val)
        return prev;
    if (!prev)
        return val;
    if (Array.isArray(prev))
        return prev.concat(String(val));
    prev = String(prev);
    if (Array.isArray(val))
        return [prev].concat(val);
    return [prev, String(val)];
}
exports.default = concatHeader;
